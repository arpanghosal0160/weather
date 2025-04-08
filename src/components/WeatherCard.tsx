// components/WeatherCard.tsx
"use client";
import { motion } from "framer-motion";

type WeatherProps = {
  city: string;
  temp: number;
  condition: string;
  humidity: number;
  wind: number;
  icon: string;
};

export default function WeatherCard({
  city,
  temp,
  condition,
  humidity,
  wind,
  icon,
}: WeatherProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/60 dark:bg-zinc-800/60 backdrop-blur-md p-6 rounded-2xl shadow-2xl text-center w-full max-w-md border border-white/20 dark:border-white/10"
    >
      <h2 className="text-2xl font-semibold mb-2">{city}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="Weather icon"
        className="mx-auto"
      />
      <p className="capitalize text-lg">{condition}</p>
      <p className="text-xl mt-2">🌡 {temp} °C</p>
      <p>💧 Humidity: {humidity}%</p>
      <p>🌬 Wind: {wind} km/h</p>
    </motion.div>
  );
}
