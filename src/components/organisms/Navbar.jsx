import { useState, useEffect } from "react";

import SearchBar from "../molecules/SearchBar";
import ButtonIcon from "../molecules/ButtonIcon";
import Icon from "../atoms/Icon";

export default function Navbar() {
  const [search, setSearch] = useState("");

  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isMusicOpen, setIsMusicOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  useEffect(() => {
    console.log("Notifications open :", isNotificationsOpen);
    console.log("Music open :", isMusicOpen);
    console.log("Settings open :", isSettingsOpen);
  }, [isNotificationsOpen, isMusicOpen, isSettingsOpen]);

  const handleSearch = () => {
    console.log("Search :", search);
  };

  const handleNotifications = () => {
    setIsNotificationsOpen((prev) => !prev);
  };

  const handleMusic = () => {
    setIsMusicOpen((prev) => !prev);
  };

  const handleSettings = () => {
    setIsSettingsOpen((prev) => !prev);
  };

  return (
    <nav
      className={[
        "h-16 px-6",
        "flex items-center justify-between gap-6",
        "bg-base-200/70 backdrop-blur-md",
        "border-b border-base-300",
      ].join(" ")}
    >

      <div className="flex items-center gap-3 shrink-0">
        <Icon
          name="LayoutDashboard"
          size="lg"
          className="text-primary"
        />

        <h1 className="text-lg font-semibold tracking-wide">
          Pulse
        </h1>
      </div>


      <div className="flex-1 flex justify-center min-w-0">
        <SearchBar
          search={search}
          onChange={(e) => setSearch(e.target.value)}
          onSearch={handleSearch}
          placeholder="Search..."
          className="w-full max-w-xl"
        />
      </div>


      <div className="flex items-center gap-2 shrink-0">
        <ButtonIcon
          icon="Bell"
          variant="ghost"
          onClick={handleNotifications}
          className={[
            "btn-circle",
            "hover:bg-base-300",
            "border-none",
            "shadow-none",
            "focus:outline-none",
            isNotificationsOpen ? "bg-base-300" : "",
          ].join(" ")}
        />

        <ButtonIcon
          icon="Music"
          variant="ghost"
          onClick={handleMusic}
          className={[
            "btn-circle",
            "hover:bg-base-300",
            "border-none",
            "shadow-none",
            "focus:outline-none",
            isMusicOpen ? "bg-base-300" : "",
          ].join(" ")}
        />

        <ButtonIcon
          icon="Settings"
          variant="ghost"
          onClick={handleSettings}
          className={[
            "btn-circle",
            "hover:bg-base-300",
            "border-none",
            "shadow-none",
            "focus:outline-none",
            isSettingsOpen ? "bg-base-300" : "",
          ].join(" ")}
        />

        <div className="avatar placeholder ml-2">
          <div
            className={[
              "w-10 rounded-full",
              "bg-primary text-primary-content",
              "flex items-center justify-center",
            ].join(" ")}
          >
            <span className="text-lg font-semibold">
              S
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}