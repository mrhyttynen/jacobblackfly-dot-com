// i want to manage ACM certificates outside terraform, with clickops on the aws console
// todo: get this working
data "aws_acm_certificate" "jacobblackflycert" {
  domain   = "jacobblackfly.com"
  statuses = ["ISSUED"]
  region   = "us-east-1"
}

# resource "aws_acm_certificate" "jacobblackflycert" {
#   domain_name = var.root_domain_name
#   provider    = aws.cloudfront-certificate
#   subject_alternative_names = [
#     "www.${var.root_domain_name}"
#   ]
#   validation_method = "DNS"
#   options {
#     certificate_transparency_logging_preference = "ENABLED"
#   }
#   tags = {
#     Name = "website-certificate"
#   }
#   lifecycle {
#     create_before_destroy = true
#   }

# }


# resource "aws_acm_certificate_validation" "my_certificate_validation" {
#   certificate_arn         = aws_acm_certificate.jacobblackflycert.arn
#   validation_record_fqdns = [for record in aws_route53_record.acm_val_records : record.fqdn]
#   provider                = aws.cloudfront-certificate
# }