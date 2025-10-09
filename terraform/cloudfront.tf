# TODO: UPDATE distributions to use this newer access control method
# resource "aws_cloudfront_origin_access_control" "website_origin_access_control" {
#   name                              = "${var.root_domain_name} Access Control Policy"
#   description                       = "Cloudfront access control policy for the ${var.root_domain_name} distribution."
#   origin_access_control_origin_type = "s3"
#   signing_behavior                  = "always"
#   signing_protocol                  = "sigv4"
# }

resource "aws_cloudfront_distribution" "www_distribution" {
  aliases                         = ["www.${var.root_domain_name}"]
  anycast_ip_list_id              = null
  comment                         = "www.${var.root_domain_name} SUBDOMAIN distribution"
  continuous_deployment_policy_id = null
  default_root_object             = "index.html"
  enabled                         = true
  http_version                    = "http2"
  is_ipv6_enabled                 = true
  price_class                     = "PriceClass_All"
  retain_on_delete                = false
  staging                         = false
  tags = {
    Name = "www.${var.root_domain_name}"
  }
  tags_all = {
    Name = "www.${var.root_domain_name}"
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
    target_origin_id           = "www.${var.root_domain_name}.s3.eu-west-2.amazonaws.com"
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
    domain_name                 = "www.${var.root_domain_name}.s3.eu-west-2.amazonaws.com"
    origin_access_control_id    = null
    origin_id                   = "www.${var.root_domain_name}.s3.eu-west-2.amazonaws.com"
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

resource "aws_cloudfront_distribution" "root_distribution" {
  aliases                         = [var.root_domain_name]
  anycast_ip_list_id              = null
  comment                         = "${var.root_domain_name} ROOT domain distribution"
  continuous_deployment_policy_id = null
  default_root_object             = null
  enabled                         = true
  http_version                    = "http2"
  is_ipv6_enabled                 = true
  price_class                     = "PriceClass_All"
  retain_on_delete                = false
  staging                         = false
  tags = {
    Name = var.root_domain_name
  }
  tags_all = {
    Name = var.root_domain_name
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
    cache_policy_id            = "4135ea2d-6df8-44a3-9df3-4b5a84be39ad"
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
    target_origin_id           = "${var.root_domain_name}.s3-website.eu-west-2.amazonaws.com"
    trusted_key_groups         = []
    trusted_signers            = []
    viewer_protocol_policy     = "allow-all"
    grpc_config {
      enabled = false
    }
  }
  origin {
    connection_attempts         = 3
    connection_timeout          = 10
    domain_name                 = "${var.root_domain_name}.s3-website.eu-west-2.amazonaws.com"
    origin_access_control_id    = null
    origin_id                   = "${var.root_domain_name}.s3-website.eu-west-2.amazonaws.com"
    origin_path                 = null
    response_completion_timeout = 0
    custom_origin_config {
      http_port                = 80
      https_port               = 443
      ip_address_type          = null
      origin_keepalive_timeout = 5
      origin_protocol_policy   = "http-only"
      origin_read_timeout      = 30
      origin_ssl_protocols     = ["SSLv3", "TLSv1", "TLSv1.1", "TLSv1.2"]
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

resource "aws_cloudfront_distribution" "dev_distribution" {
  aliases                         = ["dev.${var.root_domain_name}"]
  anycast_ip_list_id              = null
  comment                         = "dev.${var.root_domain_name} SUBDOMAIN distribution"
  continuous_deployment_policy_id = null
  default_root_object             = "index.html"
  enabled                         = true
  http_version                    = "http2"
  is_ipv6_enabled                 = true
  price_class                     = "PriceClass_All"
  retain_on_delete                = false
  staging                         = false
  tags = {
    Name = "dev.${var.root_domain_name}"
  }
  tags_all = {
    Name = "dev.${var.root_domain_name}"
  }
  wait_for_deployment = true
  web_acl_id          = null
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
    target_origin_id           = "dev.${var.root_domain_name}.s3.eu-west-2.amazonaws.com-mghsl7duz55"
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
    domain_name                 = "dev.${var.root_domain_name}.s3.eu-west-2.amazonaws.com"
    origin_access_control_id    = null
    origin_id                   = "dev.${var.root_domain_name}.s3.eu-west-2.amazonaws.com-mghsl7duz55"
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
