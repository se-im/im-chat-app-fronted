FROM node:12
WORKDIR /usr/src/app
COPY ./ ./

RUN npm install --registry=https://registry.npm.taobao.org

EXPOSE 8080
CMD [ "npm", "start" ]
