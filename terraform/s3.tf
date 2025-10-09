resource "aws_s3_bucket" "www_website_bucket" {
  bucket              = "www.${var.root_domain_name}"
  bucket_prefix       = null
  force_destroy       = false
  object_lock_enabled = false
  region              = var.website_bucket_region
}

resource "aws_s3_bucket" "root_website_bucket" {
  bucket              = var.root_domain_name
  bucket_prefix       = null
  force_destroy       = false
  object_lock_enabled = false
  region              = var.website_bucket_region
}

resource "aws_s3_bucket" "dev_website_bucket" {
  bucket              = "dev.${var.root_domain_name}"
  bucket_prefix       = null
  force_destroy       = false
  object_lock_enabled = false
  region              = var.website_bucket_region
}

resource "aws_s3_bucket_website_configuration" "root_website_bucket_config" {
  bucket                = var.root_domain_name
  expected_bucket_owner = null
  region                = var.website_bucket_region
  routing_rules         = null
  redirect_all_requests_to {
    host_name = "www.${var.root_domain_name}"
    protocol  = "https"
  }
}

# this isn't enabled on console -- add later as it's best practice
# resource "aws_s3_bucket_public_access_block" "s3Public" {
#   bucket                  = aws_s3_bucket.website.id
#   block_public_acls       = true
#   block_public_policy     = true
#   restrict_public_buckets = true
#   ignore_public_acls      = true
# }

resource "aws_s3_bucket_policy" "www_website_bucket_policy" {
  bucket = aws_s3_bucket.www_website_bucket.id
  policy = <<POLICY
{
    "Version": "2008-10-17",
    "Id": "PolicyForCloudFrontPrivateContent",
    "Statement":
      {
          "Sid": "9999",
          "Effect": "Allow",
          "Principal": {
              "AWS": "arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity E6DNWGHFRLSXT"
          },
          "Action": "s3:GetObject",
          "Resource": "arn:aws:s3:::www.${var.root_domain_name}/*",
          "Condition": {
              "StringEquals": {
                  "AWS:SourceArn": "${aws_cloudfront_distribution.www_distribution.arn}"
              }
          }
      }
}

POLICY
}

resource "aws_s3_bucket_policy" "dev_website_bucket_policy" {
  bucket = aws_s3_bucket.dev_website_bucket.id
  policy = <<POLICY
{
    "Version": "2008-10-17",
    "Id": "PolicyForCloudFrontPrivateContent",
    "Statement":
        {
            "Sid": "9999",
            "Effect": "Allow",
            "Principal": {
                "AWS": "arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity E6DNWGHFRLSXT"
            },
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::dev.${var.root_domain_name}/*",
            "Condition": {
                "StringEquals": {
                    "AWS:SourceArn": "${aws_cloudfront_distribution.dev_distribution.arn}"
                }
            }
        }
}

POLICY
}