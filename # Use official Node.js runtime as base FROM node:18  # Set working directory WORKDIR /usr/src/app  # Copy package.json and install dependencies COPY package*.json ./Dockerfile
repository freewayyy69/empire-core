# Use official Node.js runtime as base
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Expose port and define default command
EXPOSE 8080
CMD ["npm", "start"]
