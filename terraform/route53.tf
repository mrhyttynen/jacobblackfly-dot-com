# created outside terraform
data "aws_route53_zone" "root_zone" {
  name = "jacobblackfly.com"
}

resource "aws_route53_record" "acm_val_records" {
  for_each = {
    for dvo in aws_acm_certificate.jacobblackflycert.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 300
  type            = each.value.type
  zone_id         = data.aws_route53_zone.root_zone.zone_id
}

# import resource "aws_route53_record" "root_cloudfront_record"

# import resource "aws_route53_record" "sub_cloudfront_record"

  # both depends on aws_cloudfront_distribution.website_distribution