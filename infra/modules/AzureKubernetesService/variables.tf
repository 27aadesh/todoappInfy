variable "cluster_name" {
  description = "The name of the Kubernetes cluster"
  type        = string
  default     = "aks"
}

variable "location" {
  description = "The location of the resource group"
  type        = string
}

variable "resource_group_name" {
  description = "The name of the resource group"
  type        = string
}

variable "dns_prefix" {
  description = "The DNS prefix for the Kubernetes cluster"
  type        = string
  default     = "aks"
}

variable "node_pool_name" {
  description = "The name of the default node pool"
  type        = string
  default     = "default"
}

variable "node_count" {
  description = "The number of nodes in the default node pool"
  type        = number
  default     = 1
}

variable "vm_size" {
  description = "The size of the VMs in the default node pool"
  type        = string
  default     = "Standard_D2_v2"
}