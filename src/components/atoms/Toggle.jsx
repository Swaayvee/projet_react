import { TOGGLE_COLORS, TOGGLE_SIZES, UI_STATES } from "../../constants/ui";

function Toggle({
  size = "md",
  variant = "primary",
  checked,
  onChange,
  className = "",
  ...props
}) {
  const classes = [
    "toggle",
    "bg-base-300",
    TOGGLE_COLORS[variant] ?? TOGGLE_COLORS.primary,
    TOGGLE_SIZES[size] ?? TOGGLE_SIZES.md,
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <input
      type="checkbox"
      className={classes}
      checked={checked}
      onChange={onChange}
      {...props}
    />
  );
}

export default Toggle;
