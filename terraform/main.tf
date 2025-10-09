# # TF config loosely based on this https://github.com/cullancarey/terraform-aws-static-s3-website-template
provider "aws" {
  region = var.website_bucket_region
  default_tags {
    tags = var.default_tags
  }
}

provider "aws" {
  alias  = "cloudfront-certificate"
  region = "us-east-1"
  default_tags {
    tags = var.default_tags
  }
}

