Sure! Here’s the README with the commands written out in plain text instead of code blocks:

---

# **Warehouse Inventory Management System**

## **Introduction**

This project is a full-stack web application designed for managing warehouse items and locations. It allows users to add, update, and remove items, monitor stock levels, and track stock locations. The backend is built using **Node.js**, **Express**, and **MongoDB**, while the frontend is developed with **React** to provide a dynamic and user-friendly interface.
---
## **Video-link**
https://drive.google.com/file/d/1GikZI9CpEAnQo6i5WFefyyRDZvoOyxhP/view?usp=sharing
---
## **Deployment**

-link: https://inventory-gamma-liart.vercel.app/

-Email:user@example.com

-Password:password123

---

## **Thought Process & Approach**

### **Initial Research and Planning**
The project began with outlining the core functionalities required in a warehouse management system, such as item and location management, stock monitoring, and category-wise filtering. The design was focused on providing a simple and efficient interface for users to track inventory and manage warehouse locations seamlessly.(la folder)

### **Backend Design**
The backend follows a **RESTful architecture**, using **Node.js** and **Express** to handle requests and **MongoDB** to store warehouse data. Key API routes manage items, locations, and stock levels. MongoDB was chosen due to its flexibility in handling dynamic schema changes, which is ideal for this warehouse inventory system.

### **Frontend Design**
The frontend is built using **React**, which enables a responsive and dynamic user interface. React components are used for rendering warehouse items and locations, while **Redux** manages state, ensuring that data flows seamlessly between the frontend and backend and also search option is there.(bla folder)

### **Challenges & Solutions**
A key challenge was ensuring **real-time updates** of inventory levels across multiple warehouses. This was handled by implementing **WebSocket connections**, which reflect changes instantly on the frontend without requiring manual page refreshes.

---

## **Technologies Used**
- **Frontend**: React, Redux
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Containerization**: Docker
- **Version Control**: Git
- **WebSockets**: For real-time updates

---

## **Setup Instructions**

### **Running Locally**

#### **Prerequisites**
- Node.js and npm installed
- MongoDB installed locally or access to a cloud-hosted MongoDB instance

#### **Backend Setup**
1. Clone the repository:
   `git clone https://github.com/yourusername/warehouse-management.git`

2. Navigate to the backend directory:
   `cd warehouse-backend`

3. Install dependencies:
   `npm install`

4. Create a `.env` file in the `warehouse-backend` folder and add the following environment variables:
   `PORT=5000`
   `MONGO_URI=mongodb://localhost:27017/warehouse`

5. Start the backend server:
   `npm start`

#### **Frontend Setup**
1. Navigate to the frontend directory:
   `cd ../warehouse-frontend`

2. Install dependencies:
   `npm install`

3. Start the React development server:
   `npm start`

4. Open the browser and go to `http://localhost:3000` to access the frontend.

---

### **Running with Docker**

#### **Prerequisites**
- Docker installed

#### **Steps**
1. Build and run the Docker containers:
   `docker-compose up --build`

2. The backend will be accessible at `http://localhost:5000` and the frontend at `http://localhost:3000`.

3. To stop the containers:
   `docker-compose down`

### **Using Docker without Rebuilding Each Time**
To avoid rebuilding the Docker image with every code change, mount your local directories as volumes in the `docker-compose.yml` file:
```yaml
services:
  backend:
    volumes:
      - ./warehouse-backend:/app
  frontend:
    volumes:
      - ./warehouse-frontend:/app
```

---



## **Troubleshooting**

- **MongoDB connection error**: Ensure MongoDB is running locally or update the `MONGO_URI` in your `.env` file to point to your MongoDB instance.
  
- **Port binding error**: If you encounter a "port already in use" error, kill the process occupying the port:
  `netstat -ano | findstr :5000`
  `taskkill /PID <PID> /F`

---
