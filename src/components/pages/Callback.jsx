import { useEffect } from "react";
import { getTokenFromUrl } from "../../services/spotify/auth";

function Callback() {
  useEffect(() => {
    const token = getTokenFromUrl();

    if (token) {
      localStorage.setItem("spotify_token", token);
      window.location.href = "/";
    }
  }, []);

  return <p>Connecting Spotify...</p>;
}

export default Callback;