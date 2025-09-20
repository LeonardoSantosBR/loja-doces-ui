FROM node:20-alpine
WORKDIR /LOJA-DOCES-UI
COPY package.json .
RUN npm install 
COPY . . 
RUN npm run build
EXPOSE 3000
CMD ["node", "dist/main.js"]