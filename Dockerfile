FROM node
WORKDIR /usr/src/app
COPY ./ ./

RUN npm install --registry=https://registry.npm.taobao.org

EXPOSE 3000
CMD [ "npm", "start" ]
