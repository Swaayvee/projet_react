import { PROGRESS_COLORS } from "../../constants/ui";

function Progress({
  variant = "primary",
  width = "md",
  height = "md",
  value = 0,
  max = 100,
  className = "",
}) {
  const widths = {
    full: "w-full",
    sm: "w-32",
    md: "w-64",
    lg: "w-96",
  };
  const heights = {
    sm: "h-1",
    md: "h-2",
    lg: "h-4",
  };
  const safeValue = Math.min(max, Math.max(0, value));

  const classes = [
    "progress",
    PROGRESS_COLORS[variant] ?? PROGRESS_COLORS.primary,
    heights[height] ?? heights.md,
    widths[width] ?? widths.md,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <progress className={classes} max={max} value={safeValue} />
  );
}

export default Progress;
