FROM node:23-alpine as app

WORKDIR /app

COPY . .

RUN npm i
RUN npm run build


FROM node:23-alpine

ARG port
ENV PORT=$port

ARG loginPassword
ENV LOGIN_PASSWORD=$loginPassword

WORKDIR /

COPY --from=app ./app/dist/final.js .

ENTRYPOINT ["node", "final.js"]