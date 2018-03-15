FROM node:6-slim

COPY . /starter
COPY package.json /starter/package.json

WORKDIR /starter

ENV NODE_ENV production
RUN npm install --production

CMD node index.js