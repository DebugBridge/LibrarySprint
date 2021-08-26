FROM node:latest

WORKDIR /src/app

COPY . /src/app

EXPOSE 3000

RUN npm install -g yarn

RUN yarn install

CMD ["yarn", "start"]
