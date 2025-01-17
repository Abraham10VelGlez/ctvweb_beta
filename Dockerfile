FROM node:22-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 5173

CMD ["yarn", "dev"]

#Construir y ejecutar:
#docker build -t scrolljuan .
#docker run -it -p 3000:5173 scrolljuan