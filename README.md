# 🌤️ Weather Dashboard

A beautiful, responsive weather dashboard built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **OpenWeatherMap API**. Easily check real-time weather, view 5-day forecasts, and switch between light/dark themes — all in one smooth UI.



---

## 🚀 Features

- 🔍 Search weather by city
- 🔁 Refresh button to re-fetch weather
- 🌀 Animated loader while data is fetching
- 📱 Fully responsive for mobile and desktop
- 🎨 Beautiful UI with Tailwind + Framer Motion animations

---

## 🧑‍💻 Tech Stack

| Tech             | Description                      |
|------------------|----------------------------------|
| Next.js          | React framework for SSR/SSG      |
| TypeScript       | Type safety                      |
| Tailwind CSS     | Utility-first CSS framework      |
| OpenWeatherMap   | Real-time weather data API       |
| Framer Motion    | Animations and transitions       |
| Lucide React     | Clean icon system                |

---

## 🔌 API Integration

This app uses **OpenWeatherMap**:

- **Current Weather API**  
  `https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric`

- **5-Day Forecast API**  
  `https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={API_KEY}&units=metric`

🔑 **Get your API key:**  
[https://openweathermap.org/api](https://openweathermap.org/api)

💡 **Note:**  
Free tier has 60 calls/minute. Forecast is in 3-hour intervals — we extract one per day at 12:00 PM.

---

## 📦 Setup Instructions

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/weather-dashboard.git
cd weather-dashboard

# 2. Install dependencies
npm install

# 3. Create environment variable
touch .env.local
