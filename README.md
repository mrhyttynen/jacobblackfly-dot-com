# jacobblackfly-dot-com

This repo houses the code for my personal website, [jacobblackfly.com](https://jacobblackfly.com).

The website is built with React.js (Typescript), and hosted on AWS on an S3 bucket behind a Cloudfront distribution on which TLSv1.2 is enabled.
AWS infrastructure is managed with Terraform, except the Route53 hosted zone for my domain, `jacobblackfly.com`, which is managed with clickops on the AWS console.

This repo also defines a dev endpoint for my website, [dev.jacobblackfly.com](https://dev.jacobblackfly.com).
