---
name: cloudru-containerapp-deployment
description: Deploy applications to Cloud.ru Container Apps using MCP tools
---

# Cloud.ru Container App Deployment

## When to use this skill
Use this skill when you need to deploy, manage, or troubleshoot container applications on Cloud.ru Container Apps platform.

## Environment Variables (Optional)
Set these to simplify operations:
```bash
CLOUDRU_REGISTRY_NAME=nvkorolkov
CLOUDRU_REPOSITORY_NAME=wb-page
CLOUDRU_CONTAINERAPP_NAME=pet-cool-food
```

## How to deploy a container app

### Step 1: Build and Push Docker Image
Use the `cloudru_docker_build_and_push` MCP tool with these parameters:
- `image_version`: "v0.0.1" (or your version)
- `show_commands`: true (to see commands first)
- `registry_name`: your registry name
- `repository_name`: your repository name

### Step 2: Delete Existing App (if needed)
Use the `cloudru_delete_containerapp` MCP tool to remove an existing deployment.
⚠️ **Warning**: This action cannot be undone!

### Step 3: Create New Container App
Use the `cloudru_create_containerapp` MCP tool with these parameters:

**Required:**
- `containerapp_image`: "nvkorolkov.cr.cloud.ru/dns-checker:v0.0.9"
- `containerapp_port`: "8080"

**Optional:**
- `containerapp_cpu`: "0.1" (Options: 0.1, 0.2, 0.5, 1)
- `containerapp_min_instance_count`: "0" (recommended for cost savings)
- `containerapp_max_instance_count`: "1"
- `containerapp_timeout`: "60s"
- `containerapp_idle_timeout`: "600s"
- `containerapp_protocol`: "http_1" or "http_2"
- `containerapp_publicly_accessible`: "true" or "false"

### Step 4: Verify Deployment
Use the `cloudru_get_containerapp` MCP tool to check the application status and get the URL.

## How to manage container apps

### Start an app
Use `cloudru_start_containerapp` with the `containerapp_name` parameter.

### Stop an app
Use `cloudru_stop_containerapp` with the `containerapp_name` parameter.

### List all apps
Use `cloudru_get_list_containerapps` to see all deployed applications.

### View logs
Use `cloudru_get_containerapp_log` with the `containerapp_name` parameter to check application logs.

## How to manage Docker registries

### List registries
Use `cloudru_get_list_docker_registries` to see all available registries.

### Create a registry
Use `cloudru_create_docker_regist` with:
- `registry_name`: your registry name
- `registry_is_public`: "false" (or "true" for public registry)

### Login to registry
Use `cloudru_docker_login` with the `registry_name` parameter.

## Quick test
After deployment, test your app:
```bash
curl https://<app-url>
```

## Troubleshooting tips
1. Check logs using `cloudru_get_containerapp_log`
2. Verify the container image is accessible
3. Check port configuration matches your application
4. Review CPU and memory allocation
5. Ensure environment variables are set correctly
