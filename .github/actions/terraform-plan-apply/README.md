# TodoAppInfy Terraform CI/CD Pipeline

This repository contains the configuration for the Terraform CI/CD pipeline used to manage the infrastructure for the TodoAppInfy project.

## Workflow

The workflow is defined in `.github/actions/terraform-plan-apply/terraform-deploy.yml` and is triggered on:
- Manual dispatch
- Push events to the `dev` branch

## Environment Variables

The following environment variables are required for the workflow to run:
- `ARM_CLIENT_ID`
- `ARM_TENANT_ID`
- `ARM_SUBSCRIPTION_ID`
- `SERVICEPRINCIPALKEY`

These should be stored as secrets in your GitHub repository.

## Jobs

### Terraform Workflow

This job runs on `ubuntu-latest` and performs the following steps:
1. **Checkout Repository**: Checks out the repository using `actions/checkout@v4`.
2. **Setup Terraform**: Sets up Terraform using `actions/hashicorp/setup-terraform@v3`.
3. **Set Environment Variable**: Sets the `TF_VAR_AZURE_CLIENT_SECRET` environment variable.
4. **Setup TFLint**: Sets up TFLint using `terraform-linters/setup-tflint@v4`.
5. **Show TFLint Version**: Displays the TFLint version.
6. **Init TFLint**: Initializes TFLint.
7. **Run TFLint**: Runs TFLint with compact formatting.
8. **Azure Login**: Authenticates with Azure using `azure/login@v1`.
9. **Terraform Init**: Initializes Terraform with the specified variable file.
10. **Terraform Validate**: Validates the Terraform configuration.
11. **Terraform Plan**: Creates a Terraform plan.
12. **Terraform Apply**: Applies the Terraform plan.

## Directory Structure

```
.
├── .github
│   └── actions
│       └── terraform-plan-apply
│           └── terraform-deploy.yml
├── infra
│   └── todoapp_infra_vm
│       └── environments
│           └── dev
│               └── dev.tfvars
└── README.md
```

## Usage

To trigger the workflow manually, navigate to the "Actions" tab in your GitHub repository and select "Terraform CI/CD Pipeline". Click "Run workflow" to start the pipeline.

For automatic triggers, push changes to the `dev` branch.

## Contributing

Feel free to submit issues or pull requests if you have any improvements or fixes.

## License

This project is licensed under the MIT License.
