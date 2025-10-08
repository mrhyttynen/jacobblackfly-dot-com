# # https://github.com/cullancarey/terraform-aws-static-s3-website-template
# # use things from this to create your own, just use your own ACM certificate (don't create a new one)


# provider "aws" {
#   region = var.region # London
# }

# resource "aws_s3_bucket" "testbucket" {
#     bucket = "jmtestbucket-07-10-2025"
#     force_destroy = true
# }

# resource "aws_s3_bucket_policy" "public_access_policy" {
#     bucket = aws_s3_bucket.testbucket.id
#     policy = jsonencode({
#         Version = "2012-10-17",
#         Statement = [
#             {
#                 Sid = "PublicReadGetObject",
#                 Effect = "Deny",
#                 Principal = "*",
#                 Action = "s3:GetObject",
#                 Resource = "${aws_s3_bucket.testbucket.arn}/*"
#             }
#         ]
#     })
# }

# resource "aws_s3_bucket_ownership_controls" "example" {
#   bucket = aws_s3_bucket.testbucket.id

#   rule {
#     object_ownership = "BucketOwnerEnforced"
#   }
# }

# resource "aws_s3_bucket_public_access_block" "testbucket" {
#     bucket = aws_s3_bucket.testbucket.id

#     block_public_acls = false
#     block_public_policy = false
# }

# resource "aws_s3_bucket_website_configuration" "testbucket" {
#     bucket = aws_s3_bucket.testbucket.id

#     index_document {
#         suffix = "index.html"
#     }
# }

# resource "aws_s3_object" "file" {
#     bucket = aws_s3_bucket.testbucket.id
#     key = "index.html"
#     source = "index.html"
#     content_type = "text/html"
# }