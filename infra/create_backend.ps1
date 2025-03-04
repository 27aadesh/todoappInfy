# Create resource group
az group create --name rg-tfstate --location westeurope

# Create storage account
az storage account create --name stg9834tfstate --resource-group rg-tfstate --location westeurope --sku Standard_LRS

# Create storage container
az storage container create --name tfstate --account-name stg9834tfstate