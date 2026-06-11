
=======
# 🎬 my-netflix : Netflix clone with AI Search

A responsive, feature-rich front-end movie listing application built with **React**, **Redux Toolkit**, and **Tailwind CSS**. This project was built to mimic a real-world production environment, implementing robust user authentication, complex state management, and an advanced AI-powered movie recommendation system.

---

## 🚀 Live Demo & Hosting
* **Live Link:**  https://my-netflix-jasmine.web.app
* **Tech Stack:** React.js, Redux Toolkit, React Router v6, Tailwind CSS, Firebase Auth, Gemini AI API, TMDB API.

---

## 🌟 Key Features & Technical Highlights

### 🔒 Authentication & Form Management
* **Hybrid Auth Form:** Designed a seamless, single dynamic form to handle both Sign In and Sign Up actions.
* **Regex Validation:** Implemented client-side form validation using regular expressions for secure password and email inputs.
* **Firebase Authentication:** Integrated Firebase Auth for secure, persistent user session management.
* **Performance Optimization:** Utilized the React `useRef` hook for form inputs to minimize unnecessary re-renders during typing.
* **Global Auth State:** Managed user authentication states globally using a dedicated Redux slice.

### 🎬 Dynamic Browse Page
* **TMDB API Integration:** Integrated the The Movie Database (TMDB) API to fetch real-time, categorized movie data (Now Playing, Popular, Top Rated, Upcoming).
* **Custom React Hooks:** Abstracted data-fetching logic into clean, reusable custom hooks (e.g., `useNowPlayingMovies`) to keep components modular and maintainable.
* **Redux Store Architecture:** Structured the Redux store with multiple slices to cache movie data, preventing redundant API calls.
* **Immersive UI:** Embedded a dynamic YouTube video player into the background of the homepage header with autoplay and mute configurations.

### 🤖 Smart AI-Powered Search Page
* **Google Gemini AI Integration:** Leveraged the Gemini API to analyze user search queries and generate contextual movie recommendations.
* **Multi-API Orchestration:** Developed a pipeline that takes the text-based movie suggestions from Gemini, queries the TMDB API to fetch their visual details/metadata, and renders the compiled results seamlessly.

### 📱 Fully Responsive Layout
* Designed from the ground up using **Tailwind CSS** with a mobile-first approach, ensuring a flawless user experience across mobile, tablet, and desktop devices.

---

## 🛠️ Architecture & Concepts Learned
* **State Management:** Mastered global state architecture using Redux Toolkit to sync user profiles and movie data across isolated routes.
* **Routing:** Implemented protected routes using React Router, ensuring unauthenticated users are automatically redirected to the login page.
* **API Optimization:** Handled asynchronous API operations efficiently and implemented proper environment variable security (`.env`) to protect API keys.

---

## 🏁 Getting Started

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/JasmineIsmail/my-netflix.git]
   cd my-netflix

