terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws" # short for registry.terraform.io/providers/hashicorp/aws
      version = "~> 6.15"
    }
  }

  required_version = ">= 1.13" # minimum required terraform version
}
