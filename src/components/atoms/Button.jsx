import {
  BUTTON_VARIANTS,
  BUTTON_SIZES,
  BUTTON_STYLES,
  UI_STATES,
} from "./../../constants/ui";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  styleType = "solid",
  state = "normal",
  onClick,
  className = "",
}) {
  const isBlocked = state !== "normal";

  const classes = [
    "btn",
    BUTTON_VARIANTS[variant] ?? BUTTON_VARIANTS.primary,
    BUTTON_SIZES[size] ?? BUTTON_SIZES.md,
    BUTTON_STYLES[styleType] ?? "",
    className ?? "",
    UI_STATES[state] ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      onClick={isBlocked ? undefined : onClick}
      className={classes}
    >
      {state === "loading" ? "Loading..." : children}
    </button>
  );
}