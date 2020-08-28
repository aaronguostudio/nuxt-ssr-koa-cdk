FROM node:12

WORKDIR /app
ADD . /app/

RUN npm i -g npm

RUN yarn
RUN yarn build

ENV HOST 0.0.0.0
EXPOSE 3000

# start command
CMD [ "yarn", "start" ]
