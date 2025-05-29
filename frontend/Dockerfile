# Stage 1: Build the React app
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . ./

COPY .env.example .env
RUN npm run build

# Stage 2: Serve with NGINX
FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html

RUN ls -la /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
