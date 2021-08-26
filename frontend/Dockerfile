FROM node:14.15.0-alpine

RUN npm install -g @angular/cli && \
    ng config -g cli.packageManager yarn

WORKDIR /app

ADD ./src/package.json /app
ADD ./src/yarn.lock /app
RUN yarn install

ADD ./src /app

EXPOSE 80
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "80", "--poll", "1000"]
