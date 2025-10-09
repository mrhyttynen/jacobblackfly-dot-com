resource "aws_acm_certificate" "jacobblackflycert" {
  certificate_authority_arn = null
  certificate_body          = null
  certificate_chain         = null
  domain_name               = var.root_domain_name
  early_renewal_duration    = null
  key_algorithm             = "RSA_2048"
  private_key               = null # sensitive
  region                    = "us-east-1"
  subject_alternative_names = ["*.${var.root_domain_name}", var.root_domain_name]
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