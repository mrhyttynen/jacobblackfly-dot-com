resource "aws_route53_record" "root_cloudfront_record" {
  zone_id = data.aws_route53_zone.root_zone.zone_id
  name    = var.root_domain_name
  type    = "A"
  alias {
    evaluate_target_health = false
    name                   = aws_cloudfront_distribution.website_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.website_distribution.hosted_zone_id
  }
}

resource "aws_route53_record" "sub_cloudfront_record" {
  zone_id = data.aws_route53_zone.root_zone.zone_id
  name    = "www.${var.root_domain_name}"
  type    = "A"
  alias {
    evaluate_target_health = false
    name                   = aws_cloudfront_distribution.website_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.website_distribution.hosted_zone_id
  }
}

