export async function getCurrentTrack(token) {
  const res = await fetch(
    "https://api.spotify.com/v1/me/player/currently-playing",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!res.ok || res.status === 204) return null;

  const data = await res.json();

  if (!data || !data.item) return null;

  return {
    title: data.item.name,
    artist: data.item.artists?.[0]?.name || "Artiste inconnu",
    albumCover: data.item.album?.images?.[0]?.url || "",
    isPlaying: data.is_playing,
    progress_ms: data.progress_ms,
    duration_ms: data.item.duration_ms,
  };
}

export async function playPause(token, isPlaying) {
  const endpoint = isPlaying ? "pause" : "play";
  await fetch(`https://api.spotify.com/v1/me/player/${endpoint}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function skipTrack(token, isNext = true) {
  const endpoint = isNext ? "next" : "previous";
  await fetch(`https://api.spotify.com/v1/me/player/${endpoint}`, {
    method: "POST",
    headers: {
        Authorization: `Bearer ${token}`,
      },
  });
}
