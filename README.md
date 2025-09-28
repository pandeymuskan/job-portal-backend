#  Job Portal Backend

A RESTful backend server for a job portal web application. This backend allows users to register, login, post jobs (for employers), and apply for jobs (for job seekers).

##  Features

- User Authentication (JWT)
- Role-based Access Control (Admin, Employer, Job Seeker)
- CRUD operations for Job Posts
- Application submission and tracking
- RESTful API structure
- Secure password storage
- Environment-based configuration

##  Tech Stack

- **Backend:** Node.js / Express.js 
- **Database:** MongoDB 
- **Authentication:** JWT / OAuth
- **ODM:** Mongoose 
- **Other Tools:** dotenv, bcrypt, etc.

## Project Structure

job-portal-backend/
│
├── controllers/
├── routes/
├── models/
├── middlewares/
├── config/
├── utils/
├── .env.example
├── package.json
└── README.md

##  Installation

1. Clone the repository:

git clone https://github.com/your-username/job-portal-backend.git
cd job-portal-backend

2. Install dependencies:

npm install

3. Create .env file based on .env.example:

PORT=5000
DB_URI=mongodb://localhost:27017/jobportal
JWT_SECRET=your_jwt_secret

4.Run the server:

 npm run dev