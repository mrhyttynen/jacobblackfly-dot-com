# resource "aws_acm_certificate" "jacobblackflycert" {}
# import {
#   to = aws_acm_certificate.jacobblackflycert
#   id = "arn:aws:acm:us-east-1:304315860042:certificate/eff1ec19-f3e8-40bf-9c6d-c1e1599b6c01"
# }

resource "aws_acm_certificate" "jacobblackflycert" {
  certificate_authority_arn = null
  certificate_body          = null
  certificate_chain         = null
  domain_name               = "jacobblackfly.com"
  early_renewal_duration    = null
  key_algorithm             = "RSA_2048"
  private_key               = null # sensitive
  region                    = "us-east-1"
  subject_alternative_names = ["*.jacobblackfly.com", "jacobblackfly.com"]
  tags                      = {}
  tags_all                  = {}
  validation_method         = "DNS"
  options {
    certificate_transparency_logging_preference = "ENABLED"
    export                                      = "DISABLED"
  }
}

resource "aws_acm_certificate_validation" "my_certificate_validation" {
  certificate_arn         = aws_acm_certificate.jacobblackflycert.arn
  validation_record_fqdns = [for record in aws_route53_record.acm_val_records : record.fqdn]
  provider                = aws.cloudfront-certificate
}