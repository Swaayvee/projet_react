import { useState } from "react";
import Button from "./components/atoms/Button";
import Badge from "./components/atoms/Badge";
import Toggle from "./components/atoms/Toggle";
import Progress from "./components/atoms/Progress";
import Icon from "./components/atoms/Icon";
import ButtonIcon from "./components/molecules/ButtonIcon";
import SearchBar from "./components/molecules/SearchBar";
import ToggleField from "./components/molecules/ToggleField";
import Navbar from "./components/organisms/Navbar";

function App() {
  const [search, setSearch] = useState("");
  const [notifications, setNotifications] = useState(true);
  const [autoLaunch, setAutoLaunch] = useState(false);

  const handleSearch = () => {
    console.log("Recherche :", search);
  };

  return (
    <>
      <Navbar />
      <Badge styleType="outline" variant="secondary">
        testing
      </Badge>
      <Button variant="primary">test</Button>
      <Button variant="secondary" state="disabled">
        test2
      </Button>
      <Toggle />
      <Progress value={12} />
      <Icon name="Repeat" size="lg" color="error" />
      <ButtonIcon icon="Repeat" />
      <SearchBar
        search={search}
        onChange={(e) => setSearch(e.target.value)}
        onSearch={handleSearch}
        placeholder="Search a game..."
        size="md"
      />
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
    </>
  );
}

export default App;
