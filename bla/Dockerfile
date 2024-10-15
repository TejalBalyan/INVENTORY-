# # Step 1: Use official Node.js image for building the app
# FROM node:18 as build

# # Step 2: Set working directory in container
# WORKDIR /app

# # Step 3: Install dependencies
# COPY package*.json ./
# RUN npm install

# # Step 4: Copy all the source files and build the frontend
# COPY . .
# RUN npm run build

# # Step 5: Use an Nginx image to serve the app
# FROM nginx:alpine
# COPY --from=build /app/build /usr/share/nginx/html

# # Step 6: Expose frontend port (e.g., 80)
# EXPOSE 80

# # Step 7: Start the Nginx server
# CMD ["nginx", "-g", "daemon off;"]
# Step 1: Use official Node.js image for building the app
FROM node:18 as build

# Step 2: Set working directory in container
WORKDIR /app

# Step 3: Install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy all the source files and build the frontend
COPY . .
RUN npm run build

# Step 5: Use an Nginx image to serve the app
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Step 6: Expose frontend port (e.g., 80)
EXPOSE 80

# Step 7: Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
