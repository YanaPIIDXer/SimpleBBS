FROM node:14.15.0-alpine

RUN npm install -g nodemon

WORKDIR /app

ADD ./src/package.json /app
ADD ./src/package-lock.json /app
RUN npm install

ADD ./src /app

CMD ["nodemon", "--legacy-watch", "./app.js"]
