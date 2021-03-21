FROM node
WORKDIR /usr/src/app/package.json
COPY package.json .
RUN npm install
COPY . .
EXPOSE 4000

CMD "node" "-r" "esm" "."
