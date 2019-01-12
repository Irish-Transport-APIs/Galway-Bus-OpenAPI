FROM node:latest

# app directory
WORKDIR /home/node/app

# copy and install app dependencies
COPY package*.json ./

RUN yarn

# bundle app source
COPY . .

# expose on 3000 default port
EXPOSE 3000 

CMD ["yarn", "prod"]

