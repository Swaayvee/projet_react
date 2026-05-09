import { BADGE_VARIANTS, BADGE_SIZES, BADGE_STYLES } from "./../../constants/ui";

export default function Badge({
  children,
  variant = "neutral",
  size = "md",
  styleType = "solid",
  className = "",
}) {
  const classes = [
    "badge",
    BADGE_VARIANTS[variant] ?? BADGE_VARIANTS.neutral,
    BADGE_SIZES[size] ?? BADGE_SIZES.md,
    BADGE_STYLES[styleType] ?? "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <span className={classes}>{children}</span>;
}
