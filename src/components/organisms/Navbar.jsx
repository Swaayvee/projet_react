import SearchBar from "../molecules/SearchBar";
import ButtonIcon from "../molecules/ButtonIcon";
import Icon from "../atoms/Icon";

export default function Navbar({
  search,
  onSearchChange,
  onSearch,
  onNotificationsClick,
  onSettingsClick,
}) {
  return (
    <nav
      className={[
        "h-16 px-6 z-50",
        "sticky top-0 left-0 right-0",
        "flex items-center justify-between gap-6",
        "bg-base-200/70 backdrop-blur-md",
        "border-b border-base-300",
      ].join(" ")}
    >
      <div className="flex items-center gap-3 shrink-0">
        <h1 className="text-lg font-semibold tracking-wide">
          Pulse
        </h1>
      </div>

      <div className="flex-1 flex justify-center min-w-0">
        <SearchBar
          search={search}
          onChange={(e) => onSearchChange(e.target.value)}
          onSearch={onSearch}
          placeholder="Search..."
          className="w-full max-w-xl"
        />
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <ButtonIcon icon="Bell" variant="ghost" onClick={onNotificationsClick} className="btn-circle" />
        <ButtonIcon icon="Settings" variant="ghost" onClick={onSettingsClick} className="btn-circle" />

        <div className="avatar placeholder ml-2">
          <div className="w-10 rounded-full bg-primary text-primary-content flex items-center justify-center">
            <span className="text-lg font-semibold">S</span>
          </div>
        </div>
      </div>
    </nav>
  );
}