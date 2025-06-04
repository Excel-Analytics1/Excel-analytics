# Excel Analytics Platform

A powerful platform for uploading Excel files, analyzing data, and generating interactive charts.

## Features

- User authentication (register/login)
- Excel file upload (.xls, .xlsx)
- Data analysis and visualization
- Interactive 2D and 3D charts
- User dashboard with upload history
- Admin panel for user management

## Tech Stack

- Frontend: React + TypeScript + Vite
- Backend: Node.js + Express + TypeScript
- Database: MongoDB
- UI: Material-UI
- Charts: Recharts

## Setup

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (running on localhost:27017)

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy the `.env.example` file to `.env` and update with your own values:
   ```bash
   cp .env.example .env
   ```

4. Update the `.env` file with your own values:
   ```
   # Server Configuration
   PORT=5000
   NODE_ENV=development

   # MongoDB Connection
   MONGODB_URI=mongodb://localhost:27017/excel_analytics

   # JWT Configuration
   JWT_SECRET=your_secure_random_string_here

   # Email Configuration (for sending emails)
   EMAIL_SERVICE=gmail
   EMAIL_USERNAME=your_email@gmail.com
   EMAIL_PASSWORD=your_app_password_here
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Development

- Backend runs on: http://localhost:5000
- Frontend runs on: http://localhost:5173

## License

MIT 