# Build Stage
FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Serve Stage
FROM nginx:alpine
# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Setup directory structure matching ingress path
RUN mkdir -p /usr/share/nginx/html/crocodille-erp
COPY --from=build /app/dist /usr/share/nginx/html/crocodille-erp

EXPOSE 80
