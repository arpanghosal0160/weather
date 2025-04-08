"use client";

import { useState } from "react";
import WeatherCard from "@/components/WeatherCard";
import { RotateCcw } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchWeather = async (cityName?: string) => {
    const queryCity = cityName || city;
    if (!queryCity.trim()) return;

    setLoading(true);
    setError("");
    setWeatherData(null);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${queryCity}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}&units=metric`
      );

      if (!res.ok) throw new Error("City not found");

      const data = await res.json();
      setWeatherData(data);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  };

  const handleSearch = () => {
    fetchWeather();
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    fetchWeather(weatherData?.name);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-sky-200 to-blue-300  transition-colors">
      <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-gray-900">Weather Dashboard</h1>
      

      <div className="flex gap-2 mb-4 w-full max-w-md">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="px-5 py-2.5 rounded-xl border border-gray-300 dark:border-zinc-700 bg-white/90 dark:bg-zinc-800/80 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-zinc-900 transition-all duration-300 placeholder:text-gray-400 dark:placeholder:text-gray-500 w-full"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:scale-105 transition-transform shadow-md"
        >
          Search
        </button>
      </div>

      {loading && <p className="text-gray-600 dark:text-gray-300">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {weatherData && (
        <div className="flex flex-col items-center mt-6 gap-4">
          <WeatherCard
            city={weatherData.name}
            temp={weatherData.main.temp}
            condition={weatherData.weather[0].description}
            humidity={weatherData.main.humidity}
            wind={weatherData.wind.speed}
            icon={weatherData.weather[0].icon}
          />

          
          <button
            onClick={handleRefresh}
            disabled={isRefreshing}
            className={`mt-4 flex items-center gap-2 px-4 py-2 rounded-xl border shadow-sm bg-white dark:bg-zinc-800 hover:bg-blue-100 dark:hover:bg-zinc-700 transition-all text-sm font-medium ${
              isRefreshing ? "opacity-70" : ""
            }`}
          >
            <RotateCcw className={`w-4 h-4 ${isRefreshing ? "animate-spin" : ""}`} />
            {isRefreshing ? "Refreshing..." : "Refresh"}
          </button>
        </div>
      )}
    </main>
  );
}
