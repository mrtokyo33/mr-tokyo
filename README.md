# MrTokyo

## Overview
This is the complete plan and documentation for my unique personal website  My name is MrTokyo  I am an undergraduate student in Physics (Bachelor's degree), work in cybersecurity, and have various hobbies  The site will serve as a personal hub to share my knowledge, research, projects, and daily learnings 

The goal is to create a central platform where I can:
- Provide an overview of myself 
- Publish research papers with a custom LaTeX viewer 
- Host courses I create (e g , Physics, Networking, Cybersecurity) 
- Include forums for discussions 
- Manage a newsletter 
- Feature a news section 
- Showcase random and crazy personal projects 
- Maintain a daily journal of what I learn 

The site will be responsive, accessible, SEO-optimized, and feature a modern design 

## Features

### 1  **Home Page / Overview**
- Personal introduction: Who I am, my Physics studies, cybersecurity work, and hobbies 
- Profile picture, short bio, and social media links 
- Highlights: Recent posts, projects, and learnings 

### 2  **Research & Publications**
- Section for posting research articles in Physics or cybersecurity 
- Custom LaTeX viewer: Integrated MathJax or KaTeX in React with personalized styling (e g , dark/light themes, interactive zoom) 
- Each post includes tags, date, and comments 

### 3  **Courses**
- Platform for courses I create or curate 
- Examples: Introductory Physics, Networking, Cybersecurity Fundamentals 
- Features: Embedded videos (YouTube/Vimeo), simple quizzes, downloadable materials (PDF/Markdown), user progress tracking (when logged in) 
- Authentication required for progress saving 

### 4  **Forums**
- Community discussion area on topics like Physics, Cybersecurity, and Hobbies 
- Thread-based system with replies, upvotes/downvotes 
- Basic moderation tools (as admin) 

### 5  **Newsletter**
- Subscription form for weekly/monthly updates 
- Content: Summaries of new posts, projects, and learnings 
- Integration with Mailchimp or custom email sending via Django 

### 6  **News Section**
- Personal or curated news feed (e g , updates in Physics and Cybersecurity) 
- Short posts with external links 
- Optional RSS feed support 

### 7  **Random & Crazy Projects**
- Gallery of personal projects: Descriptions, screenshots, code links (GitHub) 
- Examples: Physics experiments, cybersecurity tools, creative ideas 
- Category filtering 

### 8  **Daily Learning Journal**
- Daily blog entries: What I learned today (e g , new physics concepts, cybersecurity vulnerabilities) 
- Simple format: Date, title, Markdown content 
- Search and monthly/yearly archives 

### General Features
- **Authentication**: Email/Google login for courses, forums, and newsletter management 
- **Global Search**: Site-wide search functionality 
- **Theme**: Dark/light mode toggle 
- **Analytics**: Basic Google Analytics integration 
- **SEO**: Meta tags, sitemap, open graph support 
- **Responsiveness**: Mobile-first design 

## Tech Stack

### Frontend
- **Framework**: React (with Create React App or Next js for better SEO/SSR) 
- **UI Library**: shadcn/ui (accessible, customizable components) 
- **Styling**: Tailwind CSS (fast, utility-first styling) 
- **Key Libraries**:
  - React Router for navigation 
  - MathJax/KaTeX for LaTeX rendering 
  - Axios for API calls 
  - Formik/Yup for forms 

### Backend
- **Framework**: Django (REST API, admin, authentication) 
- **Database**: PostgreSQL (SQLite for local development) 
- **API**: Django REST Framework (DRF) 
- **Authentication**: Django Allauth + JWT for API 
- **Additional**:
  - Celery for asynchronous tasks (e g , newsletter sending) 
  - Django Channels for real-time features (if needed for forums) 
