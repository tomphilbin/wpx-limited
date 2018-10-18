FROM mhart/alpine-node

WORKDIR /usr/src

COPY package.json yarn.lock ./
RUN yarn

COPY . .

RUN yarn build && yarn export -o /public