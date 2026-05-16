import {
  BUTTON_VARIANTS,
  BUTTON_SIZES,
  BUTTON_STYLES,
  UI_STATES,
  BUTTON_SHAPES,
} from "./../../constants/ui";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  styleType = "solid",
  state = "normal",
  shape = "normal",
  onClick,
  className = "",
}) {
  const isBlocked = state !== "normal";

  const classes = [
    "btn",
    BUTTON_VARIANTS[variant] ?? BUTTON_VARIANTS.primary,
    BUTTON_SIZES[size] ?? BUTTON_SIZES.md,
    BUTTON_STYLES[styleType] ?? "",
    BUTTON_SHAPES[shape] ?? "",
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