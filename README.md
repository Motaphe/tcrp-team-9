
# The ComUnity App

## Overview
The **ComUnity App** is a social platform designed to enhance communication and build social capital within community housing locations. It empowers community leaders and members to manage events, share stories, and foster a sense of belonging, using a digital platform that encourages participation and collaboration.

## The Problem

Community leaders currently struggle with managing multiple reports manually, which is both time-consuming and inefficient. Face-to-face interactions are often required to process reports, leading to delays and reducing the time available for proactive community-building initiatives. Additionally, there is a lack of a platform where members can share life experiences, support each other, and build a stronger sense of connection. This project aims to resolve these issues by providing a digital platform th...

## Our Solution

The **ComUnity App** was developed to create an easy-to-use platform where community members can:
- Stay informed and engaged through real-time announcements about upcoming events and important community matters.
- Share their life stories, fostering emotional healing and mutual support through a dedicated forum.
- Actively participate in events and volunteer for communal activities.
- Earn rewards and points for participating, encouraging more active involvement and fostering inclusivity.

By digitizing the way communities interact and support each other, the ComUnity App addresses both the inefficiencies of manual report handling and the need for deeper personal connections among community members.

## Features
- **Event Management**: Create, view, and participate in community events with ease.
- **Forums**: Dedicated space for sharing personal stories and supporting fellow community members.
- **Volunteer Opportunities**: Members can sign up for volunteer activities and earn points for participation.
- **Reward System**: Incentivizes active involvement in events and community-building initiatives.
- **Admin Dashboard**: Admins can approve events, monitor community activity, and engage with members.

## Tech Stack
- **Frontend**: React (ShadCN, MaterialUI)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Styling**: TailwindCSS

## Folder Structure
```
.
├── backend
│   ├── build
│   ├── models
│   ├── routes
│   ├── server.js
│   └── seedDatabase.js
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   └── App.js
└── README.md
```

## Installation

### Backend Setup
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add your environment variables:
   ```bash
   MONGO_URI=<Your MongoDB Connection String>
   PORT=5000
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```

## API Endpoints

### Events
- `GET /api/events`: Fetch all events
- `POST /api/events`: Create a new event
- `PUT /api/events/:id`: Update an event
- `DELETE /api/events/:id`: Delete an event

### Users
- `GET /api/users`: Fetch all users
- `POST /api/users`: Create a new user

