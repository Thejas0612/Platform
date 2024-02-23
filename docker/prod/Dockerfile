FROM node:16
RUN apt-get update -y && \
    apt-get install -y yarnpkg
# Create app directory
WORKDIR /usr/src/app
COPY package.json /usr/src/app/package.json
#RUN rm -r ./node_modules && package-lock.json
# RUN npm install --legacy-peer-deps && npm build && rm -r ./node_modules
#RUN yarnpkg install && yarnpkg cache clean
#Install "vsts-npm-auth" Globally:
RUN npm install -g vsts-npm-auth
#run vsts-npm-auth to get an Azure Artifacts token added to your user-level .npmrc file
RUN npx vsts-npm-auth -config .npmrc
# Install "@emerson/dynamic-ui":
RUN npm install @emerson/dynamic-ui
RUN npm install

COPY . /usr/src/app
# RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
