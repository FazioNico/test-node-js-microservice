FROM node:8.9-alpine

RUN mkdir -p /usr/server
WORKDIR /usr/server

COPY package.json /usr/server/package.json
RUN npm install
RUN mv /usr/server/node_modules /node_modules
# Install project dependencies
RUN npm install

COPY . /usr/server

EXPOSE 3000
CMD ["node", "./src/index.js"]
