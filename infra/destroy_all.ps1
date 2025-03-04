# Get all resource groups
$resourceGroups = az group list --query "[].name" -o tsv

# Loop through each resource group and delete it
foreach ($rg in $resourceGroups) {
    az group delete --name $rg --yes --no-wait
}