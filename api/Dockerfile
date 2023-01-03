FROM node:16.13.1-alpine as builde
RUN mkdir /api
WORKDIR /api
ADD ./package.json ./
ADD ./yarn.lock ./
RUN yarn install
COPY . /api
ENV PORT=1300
EXPOSE 1300
CMD ["yarn", "start"]