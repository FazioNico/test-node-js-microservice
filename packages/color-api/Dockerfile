FROM node:8.9-alpine

RUN mkdir -p /usr/color-api
WORKDIR /usr/color-api

COPY package.json /usr/color-api/package.json
RUN npm install
RUN mv /usr/color-api/node_modules /node_modules
# Install project dependencies
RUN npm install

COPY . /usr/color-api

EXPOSE 3002
CMD ["node", "./src/index.js"]
