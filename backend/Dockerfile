# Use Node.js LTS
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the app
COPY . .

# Expose backend port
EXPOSE 3000

# Run the server
CMD ["npm", "start"]
