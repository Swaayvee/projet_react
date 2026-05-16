async function getWeather(longitude, latitude) {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&current_weather=true`,
  );

  if (!response.ok) throw new Error("Failed to fetch weather");

  const data = await response.json();
  return data;
}

export { getWeather };
