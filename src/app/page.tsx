"use client";

import { useState } from "react";
import WeatherCard from "@/components/WeatherCard";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "next/navigation";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useRef } from "react";


export default function Home() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city.trim()) return;

    setLoading(true);
    setError("");
    setWeatherData(null);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}&units=metric`
      );

      if (!res.ok) throw new Error("City not found");

      const data = await res.json();
      setWeatherData(data);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-sky-200 to-blue-300">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Weather Dashboard</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="className=px-5 py-2.5 rounded-xl border border-gray-300 dark:border-zinc-700 bg-white/90 dark:bg-zinc-800/80 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-zinc-900 transition-all duration-300 placeholder:text-gray-400 dark:placeholder:text-gray-500"

        />
        <button
          onClick={fetchWeather}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>

      {loading && <p className="text-gray-600">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {weatherData && (
        <WeatherCard
          city={weatherData.name}
          temp={weatherData.main.temp}
          condition={weatherData.weather[0].description}
          humidity={weatherData.main.humidity}
          wind={weatherData.wind.speed}
          icon={weatherData.weather[0].icon}
        />
      )}
    </main>
  );
}
