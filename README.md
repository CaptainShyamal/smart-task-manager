# Smart Task Manager

## Project Overview
The Smart Task Manager is a full-stack web application designed to provide advanced task management capabilities. It offers features such as prioritization, recurrence, reminders, and a premium upgrade model, catering to both free and premium users. 

## Key Features
### Task Management
* Create, read, update, and delete tasks.
* Mark tasks as completed.
* Assign priorities (Urgent, Daily, Important) and organize tasks accordingly.
* Set task recurrence (Daily, Weekly, Custom).

### User Accounts and Authentication
* Secure registration and login using JWT.
* Google OAuth integration for simplified sign-in.
* Profile management and password updates.
* Tiered user roles: Free Users, Premium Users, and Administrative access.

### Reminders and Calendar Integration
* Alarm-based reminders and notifications.
* Monthly and weekly calendar views with task-date mapping.
* Note: Free users have a 7-day reminder scheduling limit, whereas premium users enjoy unlimited scheduling.

### Premium Access and Payments
* QR-based payment system (UPI integration).
* Automated account upgrade upon successful payment verification.

## Technology Stack
### Frontend
* React / Next.js
* Tailwind CSS

### Backend
* Node.js with Express
* JWT & OAuth Authentication

### Database & Caching
* MongoDB Atlas
* Redis

### Infrastructure & Deployment
* Containerization: Docker
* Orchestration: Kubernetes
* Edge & Security: Cloudflare
* Frontend Hosting: Vercel

## System Architecture
The application follows a modern cloud-native architecture:
Frontend (Vercel) -> CDN (Cloudflare) -> Backend (Dockerized Node.js) -> Redis Cache -> MongoDB Atlas

## Constraints and Considerations
* API response time is targeted to be under 300 milliseconds.
* Free tier restrictions apply (e.g., maximum 10 tasks per day, limited reminder scheduling).
* The application requires a highly available cloud deployment with horizontal scalability.
