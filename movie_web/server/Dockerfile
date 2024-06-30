FROM node:18-alpine

COPY . /server
WORKDIR /server
RUN  npm install
EXPOSE 5000
CMD [ "npm", "start"]