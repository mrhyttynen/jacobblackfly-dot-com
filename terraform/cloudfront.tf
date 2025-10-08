# TODO: UPDATE distributions to use this newer access control method
# resource "aws_cloudfront_origin_access_control" "website_origin_access_control" {
#   name                              = "${var.root_domain_name} Access Control Policy"
#   description                       = "Cloudfront access control policy for the ${var.root_domain_name} distribution."
#   origin_access_control_origin_type = "s3"
#   signing_behavior                  = "always"
#   signing_protocol                  = "sigv4"
# }

# import {
#   to = aws_cloudfront_distribution.root_distribution
#   id = "E2W9ZJZLP0VIA0"
# }

#  resource "aws_cloudfront_distribution" "www_distribution" {}
resource "aws_cloudfront_distribution" "www_distribution" {
  aliases                         = ["www.jacobblackfly.com"]
  anycast_ip_list_id              = null
  comment                         = "www.jacobblackfly.com SUBDOMAIN distribution"
  continuous_deployment_policy_id = null
  default_root_object             = "index.html"
  enabled                         = true
  http_version                    = "http2"
  is_ipv6_enabled                 = true
  price_class                     = "PriceClass_All"
  retain_on_delete                = false
  staging                         = false
  tags = {
    Name = "www.jacobblackfly.com"
  }
  tags_all = {
    Name = "www.jacobblackfly.com"
  }
  wait_for_deployment = true
  web_acl_id          = null
  custom_error_response {
    error_caching_min_ttl = 10
    error_code            = 403
    response_code         = 200
    response_page_path    = "/index.html"
  }
  default_cache_behavior {
    allowed_methods            = ["GET", "HEAD"]
    cache_policy_id            = "658327ea-f89d-4fab-a63d-7e88639e58f6"
    cached_methods             = ["GET", "HEAD"]
    compress                   = true
    default_ttl                = 0
    field_level_encryption_id  = null
    max_ttl                    = 0
    min_ttl                    = 0
    origin_request_policy_id   = null
    realtime_log_config_arn    = null
    response_headers_policy_id = null
    smooth_streaming           = false
    target_origin_id           = "www.jacobblackfly.com.s3.eu-west-2.amazonaws.com"
    trusted_key_groups         = []
    trusted_signers            = []
    viewer_protocol_policy     = "redirect-to-https"
    grpc_config {
      enabled = false
    }
  }
  origin {
    connection_attempts         = 3
    connection_timeout          = 10
    domain_name                 = "www.jacobblackfly.com.s3.eu-west-2.amazonaws.com"
    origin_access_control_id    = null
    origin_id                   = "www.jacobblackfly.com.s3.eu-west-2.amazonaws.com"
    origin_path                 = null
    response_completion_timeout = 0
    s3_origin_config {
      origin_access_identity = "origin-access-identity/cloudfront/E6DNWGHFRLSXT"
    }
  }
  restrictions {
    geo_restriction {
      locations        = []
      restriction_type = "none"
    }
  }
  viewer_certificate {
    acm_certificate_arn            = "arn:aws:acm:us-east-1:304315860042:certificate/eff1ec19-f3e8-40bf-9c6d-c1e1599b6c01"
    cloudfront_default_certificate = false
    iam_certificate_id             = null
    minimum_protocol_version       = "TLSv1.2_2021"
    ssl_support_method             = "sni-only"
  }
}
