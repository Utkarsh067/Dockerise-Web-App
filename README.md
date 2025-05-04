# 📚 Virtual Library Web App

This is a simple **Virtual Library** web application built using HTML, CSS, and JavaScript.

It is designed to be lightweight, fully responsive, and easily deployable using **Docker** and **Nginx**.

---

## 📂 Project Structure
```
Dockerise-Web-App/
├── css/
│   └── style.css
├── images/
│   └── Power 48 laws.png
│   └── eat-that-frog.jpeg
│   └── man search.jpeg
│   └── subtle art.jpeg           
│   └── alchemist.jpg
│   └── how to win.jpeg
│   └── power of subconscious mind.jpeg
│   └── the-kite-runner.jpg
│   └── atomic-habits.jpeg
│   └── ikigai.jpeg
│   └── rich-dad-poor-dad.jpeg
│   └── think and grow rich.jpeg
│   └── banner-bg.jpg
│   └── sapiens.jpeg
├── js/
│   ├── script.js
│   └── ebooks.js
├── README.md
├── dockerfile
└── index.html
```

---

## 🚀 Run Locally with Docker

**Step 1: Go to Dockerise-Web-App folder**

```
cd path/to/Dockerise-Web-App
```

**Step 2: Build the Docker image**

```
docker build -t virtual-library.
```

**Step 3: Run the Docker container**

```
docker run -d -p 8080:80 virtual-library
```

#### Visit http://localhost:8080 in your browser!
