# Build and Push Docker Image

This GitHub Action builds a Docker image from a specified Dockerfile and pushes it to Docker Hub.

## Inputs

- `dockerfile-path`: Path to the Dockerfile (required)
- `image-name`: Docker image name (required)
- `image-tag`: Docker image tag (required)
- `username`: Docker Hub username (required)
- `password`: Docker Hub password (required)

## Example Usage

```yaml
name: Build and Push Docker Image

on:
  push:
    branches:
      - main

jobs:
  build-and-push:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Build and Push Docker Image
        uses: ./.github/actions/build-and-push-docker
        with:
          dockerfile-path: './Dockerfile'
          image-name: 'your-dockerhub-username/your-image-name'
          image-tag: 'latest'
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}
```
