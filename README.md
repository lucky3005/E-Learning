# Edurl

Here's a README for setting up the Node.js backend for Edurl:  

---

# Edurl Backend 🖥️📚  
**Powering Education for All**  

This repository contains the backend for Edurl, an inclusive e-learning platform designed to provide quality education to rural communities.  

## 🚀 Getting Started  

Follow these steps to set up and run the backend server on your local machine.  

### 📌 Prerequisites  

Ensure you have the following installed:  
- [Node.js](https://nodejs.org/) (LTS version recommended)  
- [MongoDB](https://www.mongodb.com/) (or MongoDB Atlas for cloud storage)  
- [Git](https://git-scm.com/)  

### 📥 Installation  

1. **Clone the Repository**
   ```
   git clone https://github.com/lucky3005/Edurl.git
   ```  

3. **Install Dependencies**  
   ```
   npm install
   ```  

5. **Set Up Environment Variables**  
   Create a `.env` file in the root directory and configure the following:  
   ```env
   PORT = 8000  
   DB_URL = your_mongodb_connection_string  
   SECRET_KEY = your_secret_key  
   ```  

6. **Start the Server**
   ```
   npm run dev
   ```  
   The server should be running on `http://localhost:8000/` 🚀  

### 📂 Project Structure  

```
edurl-backend/
│
│   ├── controllers/      # Route controllers  
│   ├── models/           # Database schemas  
│   ├── routes/           # API endpoints  
│   ├── middlewares/      # Authentication & validation   
│   ├── helper/           # Helper functions  
│   ├── index.js          # Main entry point  
│── .env                  # Environment variables  
│── package.json          # Dependencies & scripts  
│── README.md             # Project documentation  
```  

### 🛠 API Routes   
# Authentication
```
1.POST -- User Registration    http://localhost:8000/register
2.POST -- User Login           http://localhost:8000/sign-in
3.POST -- Token Verification   http://localhost:8000/token
```

#
# Add Course {Note: only added and deleted by admin}
```
4.POST   -- Add Course              http://localhost:8000/admin/add-course
5.DELETE -- Delete Course           http://localhost:8000/admin/delete/:id
```

#
# View All Course
```
5.GET -- View Course           http://localhost:8000/user/get-course
```

#
# Add Blog
```
6.POST -- Add Blog             http://localhost:8000/admin/add-blog
7.GET  -- View Blog            http://localhost:8000/user/view-blog
```


_(More API routes coming soon...)_  
