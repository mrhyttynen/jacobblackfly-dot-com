# # TF config loosely based on this https://github.com/cullancarey/terraform-aws-static-s3-website-template
provider "aws" {
  region = var.website_bucket_region
  # These tags are applied to all resources, in addition to any tags set on individual resources. 
  # The same tag name set on a resource will supersede the default tags set here
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

