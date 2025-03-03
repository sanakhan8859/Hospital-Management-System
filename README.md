# 🏥 Hospital Information System

## Overview

The Hospital Management System is a web-based application that allows users to view hospital information and administrators to manage hospital records. The system includes features such as hospital registration, updates, deletion, and user authentication.



## User Guide

### For Users:

1.  Register an account or log in.
2.  Browse hospitals and filter by city.
3.  View hospital details like specialities and ratings.
4.  Logout when done.

### For Admins:

1.  Log in with admin credentials.
2.  Add a new hospital using the Add Hospital feature.
3.  Edit hospital details by selecting a hospital and updating its information.
4.  Delete hospitals as needed.
5.  Logout when done.

## Tech Stack

### Frontend:

-   React.js (with Vite)
-   React Router for navigation
-   Axios for API calls
-   Tailwind CSS for styling

### Backend:

-   Node.js & Express.js
-   MongoDB with Mongoose
-   JWT Authentication
-   bcrypt for password hashing

## Installation Guide

### Prerequisites

-   Node.js installed
-   MongoDB database

### 1. Clone the Repository

```
git clone <repository_url>
cd hospital-management-system 
```

### 2. Backend Setup
```
cd backend
npm install

```


Create a .env file in the backend directory with the following variables:

```
PORT=<Port>
MONGO_URI=<MongoDb Url>
JWT_SECRET=<your_jwt_secret>
```

### Start the backend server:
```
npm start # or npm run dev for development
```

### 3. Frontend Setup

```
npm start # or npm run dev for development
```
## API Endpoints

### Authentication:

-   **`POST /api/auth/register` (Register a user)**
    -   Description: Registers a new user.
    -   Request Body: `{ name, email, password }`
    -   Response: `{ token, user }`

-   **`POST /api/auth/login` (Login a user)**
    -   Description: Logs in an existing user.
    -   Request Body: `{ email, password }`
    -   Response: `{ token, user }`

### Hospitals:

-   **`GET /api/hospitals?city={city}` (Get all hospitals by city)**
    -   Description: Retrieves a list of all hospitals in a specific city.
    -   Response: `[ { hospital1 }, { hospital2 }, ... ]`

-   **`POST /api/hospitals` (Add a new hospital - Admin only)**
    -   Description: Adds a new hospital record.
    -   Authorization: Requires admin authentication (JWT).
    -   Request Body: `{ name, city, specialties, rating, imageUrl, description, numberOfDoctors, numberOfDepartments }`
    -   Response: `{ hospital }`

-   **`GET /api/hospitals` (Get all hospitals)**
    -   Description: Retrieves a list of all hospitals.
    -   Response: `[ { hospital1 }, { hospital2 }, ... ]`

-   **`PUT /api/hospitals/:id` (Update a hospital - Admin only)**
    -   Description: Updates an existing hospital record.
    -   Authorization: Requires admin authentication (JWT).
    -   Path Parameter: `id` (hospital ID)
    -   Request Body: `{ name, city, specialties, rating, imageUrl, description, numberOfDoctors, numberOfDepartments }`
    -   Response: `{ hospital }`

-   **`DELETE /api/hospitals/:id` (Delete a hospital - Admin only)**
    -   Description: Deletes a hospital record.
    -   Authorization: Requires admin authentication (JWT).
    -   Path Parameter: `id` (hospital ID)
    -   Response: `{ message: "Hospital deleted successfully" }`

-   **`PUT /api/hospitals/:id` (Update hospital details - Admin only)**
    -   Description: Updates an existing hospital record.
    -   Authorization: Requires admin authentication (JWT).
    -   Path Parameter: `id` (hospital ID)
    -   Request Body: `{ name, city, specialties, rating, imageUrl, description, numberOfDoctors, numberOfDepartments }`
    -   Response: `{ hospital }`


# Screenshots & UI Previews

## User DashBoard

### Regsistration Page  
![Alt Text](./frontend/src/assets/image/Regsistion%20Page.png)
### Log in Page 
![Alt Text](./frontend/src/assets/image/login%20Page.png)
### User DashBoard 
![Alt Text](./frontend/src/assets/image/User%20DashBoard.png)
### Seacrh City By CityName
![Alt Text](./frontend/src/assets/image/City%20Search.png)

## User DasBoard Hospital Details 
![Alt Text](./frontend/src/assets/image/user%20hospital%20details.png)



# Admin DashBoard

## Edit , More Details and  Delete 
![Alt Text](./frontend/src/assets/image/Admin%20Dashboard.png)
## Add Hospital
![Alt Text](./frontend/src/assets/image/Add%20Hospital.png)
## Edit Hospital
![Alt Text](./frontend/src/assets/image/Update%20Hospital.png)
## Admin DasBoard Hospital Details 
![Alt Text](./frontend/src/assets/image/admin%20hospital%20details%20.png)
