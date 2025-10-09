variable "root_domain_name" {
  type        = string
  description = "The domain name of your website."
}

variable "website_bucket_region" {
  type        = string
  description = "The primary region where your website will be hosted."
}

variable "default_tags" {
  type        = map(string)
  description = "Default tags for resources created in module. Type is map so please use format: {\"key\"=\"value\"}"
  default     = {}
}