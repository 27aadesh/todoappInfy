module "rgs" {
  source = "../modules/ResourceGroup"
  rgs    = var.rgs
}

module "aks" {
  source              = "../modules/AzureKubernetesService"
  depends_on          = [module.rgs]
  cluster_name        = var.cluster_name
  location            = var.location
  resource_group_name = var.resource_group_name
  dns_prefix          = var.dns_prefix
  node_pool_name      = var.node_pool_name
  node_count          = var.node_count
  vm_size             = var.vm_size
}

output "kube_config" {
  value = module.aks.kube_config
  sensitive = true
}

# module "azure_container_registry" {
#   source              = "../modules/AzureContainerRegistry"
#   acr_name            = var.acr_name
#   resource_group_name = var.resource_group_name
#   location            = var.location
#   sku                 = var.sku
#   admin_enabled       = var.admin_enabled
# }

# module "acr2aks" {
#   source              = "../modules/AttachACRtoAKS"
#   depends_on          = [module.aks, module.azure_container_registry]
#   acr_name            = var.acr_name
#   cluster_name        = var.cluster_name
#   resource_group_name = var.resource_group_name
# }
