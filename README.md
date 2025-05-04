# 📚 Virtual Library Web App

This is a simple **Virtual Library** web application built using HTML, CSS, and JavaScript.

It is designed to be lightweight, fully responsive, and easily deployable using **Docker** and **Nginx**.

---

## 📂 Project Structure
```
Dockerise-Web-App/
├── css/
│   └── style.css
├── js/
│   ├── script.js
│   └── ebooks.js
├── index.html
├── Dockerfile
└── README.md
```

---

## 🚀 Run Locally with Docker

**Step 2: Go to Dockerise-Web-App folder**

```
cd path/toDockerise-Web-App
```

**Step 1: Build the Docker image**

```
docker build -t virtual-library.
```

**Step 2: Run the Docker container**

```
docker run -d -p 8080:80 virtual-library
```

#### Visit http://localhost:8080 in your browser!
