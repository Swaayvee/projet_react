import { useState } from "react";
import ButtonIcon from "../molecules/ButtonIcon";
import Icon from "../atoms/Icon";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const items = ["Home", "Search", "Music", "Settings"];

  return (
    <aside
      className={[
        "fixed left-0 top-0 h-screen",
        isOpen ? "w-64" : "w-16",
        "flex flex-col py-6 gap-8",
        "bg-base-100 border-r border-base-300",
        "z-100 transition-all duration-300",
      ].join(" ")}
    >
      <div
        className={[
          "flex items-center",
          isOpen ? "justify-between px-4" : "justify-center",
        ].join(" ")}
      >
        <div className="relative w-12 h-12 group">
          <div
            className={[
              "absolute inset-0",
              "flex items-center justify-center",
              "transition-all duration-300",
              isOpen
                ? "opacity-100"
                : "opacity-100 group-hover:opacity-0 group-hover:-rotate-90 group-hover:scale-50",
            ].join(" ")}
          >
            <Icon
              name="LayoutDashboard"
              size="lg"
              color="primary"
            />
          </div>

          {!isOpen && (
            <div
              className={[
                "absolute inset-0",
                "flex items-center justify-center",
                "transition-all duration-300",
                "opacity-0 rotate-90 scale-50 pointer-events-none",
                "group-hover:opacity-100 group-hover:rotate-0 group-hover:scale-100 group-hover:pointer-events-auto",
              ].join(" ")}
            >
              <ButtonIcon
                icon="PanelRight"
                variant="ghost"
                className="w-12 h-12 p-0 flex items-center justify-center rounded-xl hover:bg-base-200"
                onClick={handleToggle}
                aria-label="Expand sidebar"
              />
            </div>
          )}
        </div>

        {isOpen && (
          <>
            <span className="font-semibold text-base-content flex-1 ml-4 text-xl">
              Pulse
            </span>

            <ButtonIcon
              icon="PanelLeft"
              variant="ghost"
              className="w-12 h-12 p-0 flex items-center justify-center rounded-xl transition-all hover:bg-base-200"
              onClick={handleToggle}
              aria-label="Collapse sidebar"
            />
          </>
        )}
      </div>

      <hr className="w-3/4 self-center border-base-300 border-[1.5px]" />

      <nav className="flex flex-col gap-2 flex-1 items-center">
        {items.map((item, index) => (
          <ButtonIcon
            key={index}
            icon={item}
            variant="ghost"
            className={[
              "h-12",
              "flex items-center text-[1.015em]",
              isOpen
                ? "w-3/4 justify-start gap-x-10 px-6"
                : "w-12 justify-center p-0",
              "rounded-xl transition-all",
              activeItem === item
                ? "bg-base-200 hover:bg-base-300"
                : "hover:bg-base-300/75",
              "focus:outline-none",
            ].join(" ")}
            onClick={() => setActiveItem(item)}
          >
            {isOpen && item}
          </ButtonIcon>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;