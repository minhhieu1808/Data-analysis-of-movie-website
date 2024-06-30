FROM node:18-alpine

COPY . /client
WORKDIR /client
RUN  npm install
EXPOSE 3000
CMD [ "npm", "start"]