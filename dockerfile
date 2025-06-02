FROM node:24-alpine3.22

WORKDIR /Notepad

COPY ./package*.json /

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev"]