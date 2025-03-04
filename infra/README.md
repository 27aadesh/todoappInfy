# TodoApp Infrastructure

This project provides the infrastructure setup for the TodoApp application using Terraform. It includes modules for various Azure resources such as Azure Kubernetes Service (AKS), Azure Container Registry (ACR), Virtual Machines, Networking, Load Balancers, and more.

## Getting Started

### Prerequisites

- [Terraform](https://www.terraform.io/downloads.html) installed on your local machine.
- An Azure subscription.
- Azure CLI installed and authenticated.

### Installation

1. Clone the repository:
    ```sh
    git clone https://infy-admcoe-sre@dev.azure.com/infy-admcoe-sre/todoapp-k8s/_git/todoapp-infra
    cd todoapp-infra
    ```

2. Initialize Terraform:
    ```sh
    terraform init
    ```

3. Apply the Terraform configuration:
    ```sh
    terraform apply
    ```

## Project Structure

- modules: Contains reusable Terraform modules for different Azure resources.
- pipelines: Contains CI/CD pipeline configurations.
- scripts: Contains shell scripts for provisioning software on VMs.
- todoapp_infra_k8s: Contains Terraform configurations for Kubernetes-based infrastructure.
- todoapp_infra_vm: Contains Terraform configurations for VM-based infrastructure.

## Build and Test

To build and test the infrastructure, you can use the provided Azure DevOps pipeline configuration in tf-plan-apply.yml.

## Contribute

We welcome contributions! Please fork the repository and submit pull requests.

## License

This project is licensed under the MIT License.

## References

- [Terraform Documentation](https://www.terraform.io/docs/)
- [Azure Documentation](https://docs.microsoft.com/en-us/azure/)