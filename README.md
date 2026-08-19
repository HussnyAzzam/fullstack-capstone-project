# coding-project-template
# 🚀 Full-Stack Enterprise Web Application | IBM Capstone Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-v18.x-green)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-v18.x-blue)](https://reactjs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v4.x-lightgrey)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-NoSQL-green)](https://www.mongodb.com/)
[![Docker](https://img.shields.io/badge/Docker-Containerized-blue)](https://www.docker.com/)
[![Kubernetes](https://img.shields.io/badge/Kubernetes-Orchestrated-blue)](https://kubernetes.io/)

> **Capstone Portfolio Project:** A production-grade, microservice-based web application built as the final capstone for the **IBM Full-Stack JavaScript Developer Professional Certificate**. Demonstrates modern MERN stack architecture, REST API design, user authentication, and containerized cloud deployment workflows.

---

## 📌 Executive Summary & Project Architecture

This application simulates a real-world enterprise automotive dealership platform. Users can browse inventory across locations, filter dealership branches, review ratings, and submit customer feedback processed by a backend sentiment-analysis service.

+-----------------------------------------------------------------------+
|                            React.js Client                            |
|             (SPA / Custom Components / State Management)               |
+-----------------------------------------------------------------------+
|
REST API Calls
v
+-----------------------------------------------------------------------+
|                        Node.js & Express API                          |
|             (Authentication / Routing / Microservices)                |
+-----------------------------------------------------------------------+
|                                           |
Database Queries                             Microservice Call
v                                           v
+-----------------------+                   +---------------------------+
|   MongoDB Database    |                   |  Sentiment Analysis API   |
| (Dealers & Reviews)   |                   |   (External Microservice) |
+-----------------------+                   +---------------------------+

---

## 🛠️ Full Technical Stack & Competencies

| **Front-End** | React.js, JavaScript (ES6+), HTML5/CSS3 | Component-driven UI, dynamic routing, state hooks, asynchronous API integration. |
| **Back-End** | Node.js, Express.js | Modular RESTful endpoints, JWT session handling, custom error-handling middleware. |
| **Database** | MongoDB, Mongoose, NoSQL | Document schema design, aggregate queries, indexing, and CRUD pipelines. |
| **DevOps & Cloud** | Docker, Kubernetes, OpenShift, Git/GitHub | Containerized microservices, Dockerfiles, multi-container orchestration, and CI/CD pipelines. |

---

## ✨ Core Features & Functional Highlights

* 🔑 **Authentication & Session Security:** Secure login/registration flows leveraging JSON Web Tokens (JWT), password hashing, and role-based route protection.
* 📍 **Interactive Dealer Directory:** Filterable search interface enabling users to query dealership locations and view live inventory metadata.
* 💬 **Automated Review & Sentiment Analysis:** Asynchronous feedback pipelines integrated with a microservice to categorize customer reviews by sentiment.
* 🐳 **Containerized Microservices:** Fully isolated services defined with dedicated `Dockerfile` configurations and unified via `docker-compose`.

---

## ⚡ Quick Start & Local Setup

### Prerequisites
* [Node.js (v18+)](https://nodejs.org/)
* [Docker Desktop](https://www.docker.com/products/docker-desktop/)
* [MongoDB](https://www.mongodb.com/)

### Installation Steps

1. **Clone the Repository:**
   ```bash
   git clone [https://github.com/YOUR_USERNAME/ibm-fullstack-capstone.git](https://github.com/YOUR_USERNAME/ibm-fullstack-capstone.git)
   cd ibm-fullstack-capstone

2. Configure Environment Variables:
    Create a .env file in the root directory:
    
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/dealerships
    JWT_SECRET=your_jwt_secret_key

3. Deploy Containers Locally:
    docker-compose up --build
   Access the React application at http://localhost:3000 and the Node.js API server at http://localhost:5000.

   👨‍💻 Developer Profile
    Engineered by a Full-Stack Software Developer combining modern JavaScript technologies (MERN, Docker, Kubernetes) with 7+ years of expertise across           WordPress web design, digital marketing, Customer Success, technical support, and business process automation to build reliable, high-converting, user-        focused web applications.
   
     🌐 LinkedIn: [https://www.linkedin.com/in/hussnyazzam/]

      💼 GitHub: [https://github.com/HussnyAzzam/fullstack-capstone-project]

