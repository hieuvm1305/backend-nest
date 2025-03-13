FROM node:20-alpine

WORKDIR /nest-app

COPY package*.json ./

COPY . .

RUN npm install

CMD ["sh", "-c", "npm run start:dev"]