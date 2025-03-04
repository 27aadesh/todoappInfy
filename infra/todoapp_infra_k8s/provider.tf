terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "4.0.0"
    }
  }
  backend "azurerm" {
    resource_group_name   = "rg-tfstate"
    storage_account_name  = "stg9834tfstate"
    container_name        = "tfstate"
    key                   = "terraform.tfstate"
  }
}

provider "azurerm" {
  resource_provider_registrations = "none"
  subscription_id                 = "1075ec7a-b17a-4f37-bf3f-9d68c4506dc1"
  features {}
}
