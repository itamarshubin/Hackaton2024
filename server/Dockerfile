FROM node:23-alpine AS app

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
COPY --from=app ./app/files files

ENTRYPOINT ["node", "final.js"]