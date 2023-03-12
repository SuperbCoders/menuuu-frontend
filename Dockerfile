FROM node:16-alpine as builder
ENV REACT_APP_BACKEND_URL=http://62.84.114.151
ENV GENERATE_SOURCEMAP=false
WORKDIR /app
COPY . .
RUN npm install && npm install -g serve
RUN npm run build
CMD [ "serve", "-s", "build" ]

