# created outside terraform
data "aws_route53_zone" "root_zone" {
  name = var.root_domain_name
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

resource "aws_route53_record" "www_cloudfront_record" {
  allow_overwrite                  = null
  health_check_id                  = null
  name                             = "www.${var.root_domain_name}"
  type                             = "A"
  zone_id                          = data.aws_route53_zone.root_zone.zone_id
  alias {
    evaluate_target_health = false
    name                   = aws_cloudfront_distribution.www_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.www_distribution.hosted_zone_id
  }
}

resource "aws_route53_record" "dev_cloudfront_record" {
  allow_overwrite                  = null
  health_check_id                  = null
  name                             = "dev.${var.root_domain_name}"
  type                             = "A"
  zone_id                          = data.aws_route53_zone.root_zone.zone_id
  alias {
    evaluate_target_health = false
    name                   = aws_cloudfront_distribution.dev_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.dev_distribution.hosted_zone_id
  }
}

resource "aws_route53_record" "root_cloudfront_record" {
  allow_overwrite                  = null
  health_check_id                  = null
  name                             = var.root_domain_name
  type                             = "A"
  zone_id                          = data.aws_route53_zone.root_zone.zone_id
  alias {
    evaluate_target_health = false
    name                   = aws_cloudfront_distribution.root_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.root_distribution.hosted_zone_id
  }
}
