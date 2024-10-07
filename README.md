# Express-React Course App

This is a full-stack web application for managing and viewing course data. The project is divided into two parts: a **React frontend** and an **Express backend**. The app allows users to view a list of courses and fetch detailed information for each course by making API calls to the backend.

## Author

- Md. Ashraful Haque

## Project Structure

- **Client (Frontend)**: Built with React, it provides the user interface for viewing the course list and course details. The client also integrates Firebase Authentication for secure login.
- **Server (Backend)**: An Express.js API serving course data from a JSON file, allowing the frontend to access the data through RESTful endpoints.

## Links

- **GitHub Repository [Client]**: [express-react-course-app](https://github.com/ashrafulhaque/express-react-course-app)
- **GitHub Repository [Server]**: [express-endpoint-server](https://github.com/ashrafulhaque/express-endpoint-server)
- **Live URL [Client]**: [https://express-react-course-app.vercel.app/](https://express-react-course-app.vercel.app/)
- **Live URL [Server]**: [https://express-endpoint-server.vercel.app/](https://express-endpoint-server.vercel.app/)

## Features

### Client (React)

- Course listing and course details view.
- Navigation via `react-router-dom`.
- Protected routes ensuring that only authenticated users can access certain pages.
- Responsive design using Tailwind CSS.
- Firebase Authentication (Google, GitHub, and email/password providers).

### Server (Express.js)

- RESTful API serving course data.
- Two main API endpoints:
  - `/products` – Fetch all courses.
  - `/products/:id` – Fetch details of a specific course by ID.
- CORS enabled for cross-origin requests from the frontend.

## Technologies Used

### Frontend

- React
- React Router
- Firebase Authentication
- Tailwind CSS for styling
- DaisyUI for styling

### Backend

- Node.js
- Express.js
- CORS Middleware
- JSON for mock course data

## API Endpoints (Server)

- **GET** `/products`: Fetches all courses from the backend.
- **GET** `/products/:id`: Fetches details of a course by its ID.

## License

- This project is licensed under the MIT License.
