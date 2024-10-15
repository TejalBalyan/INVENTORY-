# # Use the official Node.js image as a base
# FROM node:20-alpine3.17

# # Set the working directory inside the container
# WORKDIR /app

# # Copy package.json and package-lock.json (if available)
# COPY ./package.json ./ 
# COPY ./package-lock.json ./ 

# # Install dependencies
# RUN npm install

# # Copy the rest of the application files
# COPY . .

# # Copy the .env file
# COPY ./.env ./

# # Expose the port the app runs on (5000 or 5001 depending on your setup)
# EXPOSE 5000  
# # Command to run the application
# CMD ["npm", "start"]
# Step 1: Use the official Node.js image as a base for the backend
# Step 1: Use the official Node.js image as a base for the backend
FROM node:20-alpine3.17 AS backend-build

# Step 2: Set the working directory for the backend
WORKDIR /app

# Step 3: Install backend dependencies
COPY ./package*.json ./  
RUN npm install

# Step 4: Copy the backend source files
COPY . .  
# Step 5: Copy the .env file if necessary
COPY ./.env ./

# Step 6: Expose the backend port
EXPOSE 5000

# Step 7: Start the backend application
CMD ["npm", "start"]
