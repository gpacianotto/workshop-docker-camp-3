FROM node:lts

WORKDIR /usr/src/app

COPY . .

RUN yarn install

EXPOSE 3344

CMD [ "yarn", "start" ]