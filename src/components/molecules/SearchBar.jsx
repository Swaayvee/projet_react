import ButtonIcon from "../molecules/ButtonIcon";
import Input from "../atoms/Input";

export default function SearchBar({
  search = "",
  onChange,
  onSearch,
  placeholder = "Search",
  className = "",
  size = "md",
}) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch?.();
    }
  };

  return (
    <div
      className={[
        "flex items-center rounded-full border bg-base-100",
        "transition-all duration-200",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <ButtonIcon
        icon="Search"
        iconPosition="left"
        variant="ghost"
        aria-label="Search"
        className="hover:bg-transparent border-none shadow-none"
        onClick={onSearch}
      />

      <Input
        value={search}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        variant="neutral"
        size={size}
        className="flex-1 min-w-0 border-none bg-transparent focus:outline-none focus:border-none"
      />
    </div>
  );
}