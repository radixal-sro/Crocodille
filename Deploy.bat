@echo off
setlocal

:: Configuration
set IMAGE_NAME="ghcr.io/radixal-sro/crocodille-erp"
set DOCKERFILE_PATH="Dockerfile"
set NAMESPACE="crocodille-erp"
set DEPLOYMENT_NAME="crocodille-erp"

:: Build Docker image
echo Building Docker image...
docker build -t %IMAGE_NAME%:latest -f %DOCKERFILE_PATH% .
set BUILD_ERROR=%ERRORLEVEL%

if %BUILD_ERROR% neq 0 (
    echo Docker build failed.
    pause
    exit /b 1
)

:: Push Docker image to GHCR
echo Pushing Docker image to GHCR...
docker push %IMAGE_NAME%:latest
if errorlevel 1 (
    echo Docker push failed.
    pause
    exit /b 1
)

:: Update kubeconfig
set KUBECONFIG=c:\Users\pslep\.kube\Nethost_radixal.yaml
kubectl config use-context client-admin@radixal-dev

:: Apply Kubernetes manifests
echo Applying K8s manifests...
kubectl apply -f k8s/


:: Restart rollout deployment
echo Restarting deployment...
kubectl rollout restart deployment %DEPLOYMENT_NAME% -n %NAMESPACE%

echo Deployment complete.
pause
endlocal
