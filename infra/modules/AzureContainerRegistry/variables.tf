variable "acr_name" {
  description = "The name of the Azure Container Registry"
  type        = string
  default     = "containerRegistry1"
}

variable "resource_group_name" {
  description = "The name of the resource group"
  type        = string
}

variable "location" {
  description = "The location of the resource group"
  type        = string
}

variable "sku" {
  description = "The SKU of the Azure Container Registry"
  type        = string
  default     = "Premium"
}

variable "admin_enabled" {
  description = "Specifies whether the admin user is enabled"
  type        = bool
  default     = false
}