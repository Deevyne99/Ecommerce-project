# Fullstack E-commerce Project

This project is a fullstack e-commerce web application that allows users to explore products, manage their shopping carts, and securely place orders. Built with a modern tech stack, it includes a frontend for seamless user experience and a robust backend for data handling and secure payment processing.

## Features

- **User Authentication**: Users can sign up, log in, and manage their accounts.
- **Admin Product Management**: Admins can add, update, and delete products from the backend.
- **Shopping Cart & Checkout**: Users can add items to their cart, view their cart, and proceed to checkout.
- **Order Tracking**: Users can view their orders and monitor delivery status.
- **Search & Filter**: Includes search functionality and product filtering by category.
- **Responsive Design**: Tailwind CSS ensures the app adapts to various screen sizes.
- **State Management**: Redux and Redux Toolkit handle state for a scalable and maintainable architecture.

## Tech Stack

### Frontend

- **React**: A JavaScript library for building interactive UIs.
- **Tailwind CSS**: Utility-first CSS framework for fast styling.
- **Redux & Redux Toolkit**: State management for predictable and testable state across the app.

### Backend

- **Node.js**: JavaScript runtime for the server.
- **Express.js**: Lightweight Node.js framework for routing and APIs.
- **MongoDB**: NoSQL database to store user and product data.
- **Stripe**: For secure payment processing.

## Code Structure

### Frontend

- `src/components`: Contains reusable UI components like buttons, cards, product displays.
- `src/pages`: Different pages like Home, Product Details, Cart, and Checkout.
- `src/features`: Stores Redux slices and actions for managing state.

### Backend

- `models/`: Contains Mongoose models for data schemas (e.g., User, Product, Order).
- `Database/`: Contains Mongoose connection
- `controllers/`: Manages business logic for handling requests and responses.
- `routes/`: Contains the Express routes for handling API requests.
- `middleware/`: Contains authentication and authorization middleware.

## Installation and Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Deevyne99/Ecommerce-project.git
   cd ecommerce-project

   ```

2. **Navigate to Frontend**
   `cd frontend`
   **Navigate to the project folder**
   `cd Ecommerce-projecr`
   **Install Dependencies**
   `npm install`
   **Run the code**
   `npm run dev`

3. **Navigate to Frontend**
   `cd Server`

   **Install Dependencies**
   `npm install`
   **Run the code**
   `npm start`

   **API DOCUMENTATION**
   <a href="https://ecommerce-project-2-2n0h.onrender.com"

   > Api Docs</a>
