FROM node:18

COPY ./package.json /myfolder/
COPY ./yarn.lock /myfolder/
WORKDIR /myfolder
RUN yarn install

COPY . /myfolder

RUN yarn build

CMD yarn start:prod