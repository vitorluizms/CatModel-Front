FROM node:alpine AS build

WORKDIR /app

COPY . .

# Define a variável de ambiente VITE_API_URL
ENV VITE_API_URL=https://cat-model.vercel.app

RUN npm install

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
