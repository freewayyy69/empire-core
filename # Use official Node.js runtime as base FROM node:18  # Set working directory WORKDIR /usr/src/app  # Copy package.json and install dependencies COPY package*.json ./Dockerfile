# 1) Build stage
FROM node:18 AS build

# set working dir
WORKDIR /usr/src/app

# only copy package manifests and install deps
COPY package*.json ./
RUN npm ci

# copy the rest of the source & build
COPY . .
RUN npm run build

# 2) Production stage
FROM nginx:alpine

# copy the build output to nginx’s public folder
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# expose port 80 and start nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
