# 🍔 Food Delivery App – MERN Stack (User + Admin Panel)

A full-stack food delivery web application built using the **MERN Stack** (MongoDB, Express, React, Node.js) with **Stripe payment integration**, **JWT authentication**, and a dedicated **Admin Dashboard** to manage menu items and orders.

---

## 🚀 Features

### 👨‍💻 User Side (Frontend)
- Browse and view all available food items.
- Add or remove items from the cart.
- Place orders with delivery details.
- Secure online payment via **Stripe**.
- View your past orders and order status.
- Authentication using **JWT tokens**.
- Responsive UI with smooth navigation.

### 🛠️ Admin Panel
- Manage all customer orders.
- Track payment status and delivery progress.
- Upload food images directly to the server.

### ⚙️ Backend (API)
- Built with **Node.js** + **Express.js**.
- Uses **MongoDB Atlas** for cloud data storage.
- RESTful APIs for frontend and admin.
- JWT-based user authentication and authorization.
- Image upload using **Multer**.
- Integrated **Stripe Payment Gateway**.
- Admin and user order management.

---

## 🧱 Tech Stack

| Layer | Technology |
|--------|-------------|
| **Frontend** | React.js, Axios, React Router, Context API |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas |
| **Payment** | Stripe API |
| **Auth** | JWT (JSON Web Token) |
| **Image Upload** | Multer |
| **Styling** | CSS |
| **Deployment** | Render / Vercel / Azure |

---

## 🗂️ Folder Structure
Food-delivery-app/
├── backend/
│ ├── server.js
│ ├── routes/
│ ├── models/
│ ├── controllers/
│ ├── middleware/
│ └── config/
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── context/
│ │ └── assets/
│ └── package.json
│
├── admin/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── assets/
│ └── package.json
│
└── README.md
