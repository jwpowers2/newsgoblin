FROM node:alpine

WORKDIR /app

COPY . .

RUN npm install pm2 -g

RUN npm install

EXPOSE 5000

CMD ["node", "/app/server.js"]
#CMD ["pm2-runtime", "--env-file=.env", "/app/server.js"]