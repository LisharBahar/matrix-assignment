# Use the official Node.js image as base
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port on which your application runs
EXPOSE 8080

# Command to run your Node.js application
CMD ["node", "index.js"]