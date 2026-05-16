import { useState, useEffect } from "react";
import { loginSpotify, getTokenFromCode } from "./services/spotify/auth";
import Button from "./components/atoms/Button";
import Badge from "./components/atoms/Badge";
import Toggle from "./components/atoms/Toggle";
import Progress from "./components/atoms/Progress";
import Icon from "./components/atoms/Icon";
import ButtonIcon from "./components/molecules/ButtonIcon";
import SearchBar from "./components/molecules/SearchBar";
import ToggleField from "./components/molecules/ToggleField";
import Navbar from "./components/organisms/Navbar";
import Widget from "./components/organisms/Widget";
import WeatherWidget from "./components/organisms/WeatherWidget";
import Sidebar from "./components/organisms/Sidebar";
import SettingsPanel from "./components/organisms/SettingsPanel";
import MusicWidget from "./components/organisms/MusicWidget";
import StatsWidget from "./components/organisms/StatsWidget";

function App() {
  const [search, setSearch] = useState("");
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [spotifyToken, setSpotifyToken] = useState(
    localStorage.getItem("spotify_token"),
  );

  const [notifications, setNotifications] = useState(true);
  const [autoLaunch, setAutoLaunch] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (code) {
      window.history.replaceState({}, document.title, "/");
      getTokenFromCode(code).then((token) => {
        if (token) {
          setSpotifyToken(token);
        }
      });
    }
  }, []);

  const handleSearch = () => {
    console.log("Recherche :", search);
  };

  const handleMusicClick = () => {
    if (!spotifyToken) {
      loginSpotify();
    } else {
      localStorage.removeItem("spotify_token");
      setSpotifyToken(null);
    }
  };

  return (
    <div className="pl-16 min-h-screen bg-base-100">
      <Sidebar />
      <Navbar
        search={search}
        onSearchChange={setSearch}
        onSearch={handleSearch}
        onNotificationsClick={() => setIsNotificationsOpen((prev) => !prev)}
        onSettingsClick={() => setIsSettingsOpen((prev) => !prev)}
      />
      <main className="p-6 flex flex-col gap-6">
        <div>
          <Badge styleType="outline" variant="secondary">
            testing
          </Badge>
        </div>
        <div className="flex gap-4">
          <Button variant="primary">test</Button>
          <Button variant="secondary" state="disabled">
            test2
          </Button>
        </div>
        <div>
          <Toggle />
        </div>
        <div>
          <Progress value={12} />
        </div>
        <div className="flex gap-4 items-center">
          <Icon name="Repeat" size="lg" color="error" />
          <ButtonIcon icon="Repeat" />
        </div>
        <div className="flex gap-4">
          <ToggleField
            title="Notifications"
            description="Activer les notifications système"
            checked={notifications}
            onChange={(e) => setNotifications(e.target.checked)}
          />
          <ToggleField
            title="Auto Launch"
            description="Lancer l’app au démarrage"
            checked={autoLaunch}
            onChange={(e) => setAutoLaunch(e.target.checked)}
            variant="secondary"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Widget
            title="Notifications"
            actions={
              <ButtonIcon icon="Bell" variant="ghost" className="btn-circle" />
            }
          >
            <p>3 nouvelles notifications.</p>
          </Widget>
          <WeatherWidget />
          <MusicWidget token={spotifyToken} onMusicClick={handleMusicClick} />
          <StatsWidget />
        </div>
      </main>
    </div>
  );
}

export default App;
