FROM node:20-alpine
WORKDIR /LOJA-DOCES-UI
COPY package.json .
RUN npm install 
COPY . . 
RUN npm run build
EXPOSE 4173
CMD ["npm", "run", "preview", "--", "--host"]