FROM node:16
#RUN useradd -ms /bin/bash configitUser
#USER configitUser
# Create app directory
WORKDIR /usr/src/app
# Remove package-lock.json and node_modules
# RUN rm /usr/src/app/package-lock.json
# RUN rm /usr/src/app/node_modules
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# COPY package*.json /usr/src/app/package.json
COPY package.json ./
COPY package-lock.json ./
COPY docker/dev/.npmrc ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production
COPY . ./
EXPOSE 3000
#CMD ["npm", "start" ]
CMD npm run start-app
