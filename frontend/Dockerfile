FROM node:14.15.0-alpine

RUN yarn global add @vue/cli

WORKDIR /app

ADD ./src/package.json /app
ADD ./src/yarn.lock /app
RUN yarn install

ADD ./src /app

EXPOSE 80
CMD ["yarn", "serve"]
