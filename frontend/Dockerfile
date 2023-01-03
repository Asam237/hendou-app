FROM node:16.13.1-alpine as builde
RUN mkdir /frontend
WORKDIR /frontend
ADD ./package.json ./
ADD ./yarn.lock ./
RUN yarn install
COPY . /frontend
ENV PORT=5000
EXPOSE 5000
CMD ["yarn", "start"]