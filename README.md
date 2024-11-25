# Employee Management System (EMS) - GraphQL API

A robust backend service for managing employees with a GraphQL API. This project implements role-based access control, authentication, and features like adding, updating, listing, and retrieving employee details. It uses **MongoDB Atlas** for database management and **JWT** for authentication.

## Features

- **Role-Based Authentication**:
  - Admins can add and update employee details.
  - Employees and other roles have restricted access.
- **Employee Management**:
  - Add employees (admin only).
  - Retrieve a list of employees with pagination and sorting.
  - Retrieve details for a single employee.
  - Update employee details (admin only).
- **Authentication**:
  - User registration and login with JWT.
  - Protected GraphQL queries and mutations.
- **Database**:
  - MongoDB for employee and user data storage.
  - Validation and schema enforcement using Mongoose.

---

## Technologies Used

- **Node.js**: Backend runtime.
- **Express.js**: Server framework.
- **Apollo Server**: GraphQL API implementation.
- **MongoDB Atlas**: Cloud-based NoSQL database.
- **Mongoose**: MongoDB object modeling.
- **JSON Web Tokens (JWT)**: Authentication mechanism.
- **Postman**: API testing and debugging.

---

## Prerequisites

- **Node.js** (v16+)
- **MongoDB Atlas** (or local MongoDB setup)
- **Postman** (optional, for testing)
- **Environment Variables**:
  - Create a `.env` file in the root directory with the following variables:
    ```env
    MONGO_URI=<Your MongoDB Connection String>
    JWT_SECRET=<Your JWT Secret>
    PORT=4000
    ```

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/employee-management-system.git
   cd employee-management-system
