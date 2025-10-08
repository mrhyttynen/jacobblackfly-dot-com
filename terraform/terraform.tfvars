website-bucket-region = "eu-west-2"
root_domain_name = "jacobblackfly.com"
# root_domain_name = "example.com" # scared of wreckign my existing website if I use it here
default_tags = {
  "managedWithTerraform" = "true"
}
cloudfront_viewer_protocol_policy = "redirect-to-https"
# backup-website-bucket-region =  # dont need multiregion for now