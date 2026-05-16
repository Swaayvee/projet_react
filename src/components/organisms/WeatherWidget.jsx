import Widget from "./Widget";
import ButtonIcon from "../molecules/ButtonIcon";
import { getWeather } from "../../services/weather/openMeteo.service";
import { useEffect, useState } from "react";

export default function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const [isApprox, setIsApprox] = useState(false);

  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude, accuracy } = pos.coords;
        setIsApprox(accuracy > 1000);
        const data = await getWeather(latitude, longitude);
        setWeather(data.current_weather);
      },
      async () => {
        setIsApprox(true);
        const PARIS = {
          latitude: 48.8566,
          longitude: 2.3522,
        };
        const data = await getWeather(PARIS.latitude, PARIS.longitude);
        setWeather(data.current_weather);
      }
    );
  }, []);

  return (
    <Widget title="Météo">
      {weather ? (
        <div className="flex flex-col items-center justify-center p-4">
          <p>{weather.weathercode}</p>
          <p className="text-4xl font-bold">{weather.temperature}°C</p>
          <p className="text-xs opacity-60 mt-1">
            {isApprox ? "Localisation approximative" : "Localisation précise"}
          </p>
        </div>
      ) : (
        <p className="text-center italic opacity-50">
          Chargement de la météo...
        </p>
      )}
    </Widget>
  );
}