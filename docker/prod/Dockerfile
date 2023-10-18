FROM node:16
RUN apt-get update -y && \
    apt-get install -y yarnpkg
# Create app directory
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
#RUN rm -r ./node_modules && package-lock.json
# RUN npm install --legacy-peer-deps && npm build && rm -r ./node_modules
#RUN yarnpkg install && yarnpkg cache clean
ENV ISSUER https://accessemr.oktapreview.com

RUN npm install

COPY . .
RUN npm run build
EXPOSE 3000

CMD ["npm", "run", "start"]
