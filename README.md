
# 📚 ShelfWise

**ShelfWise** is a full-stack web application designed for book enthusiasts to discover, manage, and share their reading experiences. Users can browse books, write and manage reviews, and create posts to engage with the community—all from a responsive, intuitive interface.

---

## 🚀 Tech Stack

* **Frontend:** React, Vite, TailwindCSS  
* **Backend:** Go (Fiber framework), GORM  
* **Database:** MySQL  
* **Testing:** Vitest, React Testing Library, Cypress, Go test  

---

## ✨ Key Features

### 📖 Books
* Browse a curated collection of books by category  
* Add, edit, or delete books  
* View detailed book pages with descriptions and reviews  

### 🗣️ Reviews
* Add, update, and delete personal reviews  
* View reviews from other users on book pages  
* Edit or delete your own reviews  

### 📝 Posts
* Create posts to share book-related insights or recommendations  
* Edit or delete posts authored by the user  
* View all community posts in a dedicated section  

### 👥 Authentication
* User registration and login with hashed password storage  
* Secure session handling with API route protection  
* Planned role-based access (Author vs Reader)  

---

## ⚙️ Getting Started

### Prerequisites

* Go (v1.20+)  
* Node.js (v18+)  
* MySQL  
* npm or yarn  
* *(Optional)* Docker & Docker Compose  

### 1. Clone the Repository
```bash
git clone https://github.com/Meghana-21/ShelfWise.git
cd ShelfWise
```

### 2. Run the Backend
```bash
cd server
go mod tidy
# Create a .env file with the following:
# DATABASE_URL="user:pass@tcp(localhost:3306)/shelfwise_db?charset=utf8mb4&parseTime=True&loc=Local"
go run server.go
```

The API will be served at `http://localhost:3000`.

### 3. Run the Frontend
```bash
cd ../client
npm install
npm run dev
```

Access the application at `http://localhost:5173`.

---

## 🧪 Testing

### Frontend
* **Unit Testing (Vitest + React Testing Library):**
```bash
cd client
npm test
```

* **End-to-End Testing (Cypress):**
```bash
cd client
npx cypress open
```

### Backend
```bash
cd server
go test ./tests -v
```

Ensure test database config is set up in `.env`.

---

## 📁 Project Structure

```
ShelfWise/
├── client/          # React frontend
│   ├── src/
│   └── tests/
├── server/          # Go backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── tests/
└── README.md
```

---

## 📌 Future Improvements

* Add role-based permissions for authors  
* Support rich media and full-content uploads to enhance book presentation and accessibility  
* Improve book browsing experience with filters and sorting  
* Dark mode and mobile responsiveness enhancements  

---

## 🤝 Contributions

Open to contributions! Please open issues for bug reports or feature suggestions, or fork and submit a PR.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
