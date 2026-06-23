# 🏥 Doctor Appointment Booking System

A full-stack web application that allows patients to book appointments with doctors online and helps doctors manage their schedules efficiently.

---

## 🚀 Features

* 👨‍⚕️ Browse available doctors
* 📅 Book and manage appointments
* 🔐 Secure authentication (JWT-based login/signup)
* 🧑‍💼 Separate dashboards for patients and doctors
* ⏱️ Real-time slot availability with conflict prevention
* 📱 Responsive UI for all devices

---

## 🛠️ Tech Stack

**Frontend**

* React.js
* HTML, CSS, JavaScript
* Axios (API calls)

**Backend**

* Node.js
* Express.js

**Database**

* MongoDB

**Authentication**

* JSON Web Tokens (JWT)

---

## 📂 Project Structure

```
/client        → React frontend  
/server        → Node.js backend  
  /routes      → API routes  
  /controllers → Business logic  
  /models      → Database schemas  
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/doctor-appointment-app.git
cd doctor-appointment-app
```

### 2. Install dependencies

**Frontend**

```bash
cd client
npm install
npm run dev
```

**Backend**

```bash
cd server
npm install
npm start
```

---

## 🔑 Environment Variables

Create a `.env` file in the server folder and add:

```
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

---

## 🧠 Key Learning

* Built a complete full-stack application from scratch
* Learned API design and RESTful architecture
* Implemented secure authentication using JWT
* Solved real-world issue of appointment conflicts
* Improved code structure and scalability

---

## 🚧 Future Improvements

* 💳 Payment integration (Razorpay/Stripe)
* 📧 Email/SMS notifications
* 🎥 Video consultation feature
* ☁️ Deployment on AWS

