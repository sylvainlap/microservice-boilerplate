FROM node:8.12.0

RUN mkdir -p /app

WORKDIR /app

ADD package.json package-lock.json /app/

RUN npm install

COPY . /app/

EXPOSE 8080

CMD ["npm", "start"]
