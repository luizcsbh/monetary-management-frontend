FROM node:13.10.1

# Create app directory
RUN mkdir -p /home/node/monetary-management-frontend/node_modules && chown -R node:node /home/node/monetary-management-frontend

WORKDIR /home/node/monetary-management-frontend

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)

COPY package*.json ./

COPY --chown=node:node . .

USER node

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

EXPOSE 3003

ENTRYPOINT [ "http://localhost:3003/api","http://localhost:3003/oapi" ]

CMD npm rum start