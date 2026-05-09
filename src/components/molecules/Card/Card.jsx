import { CARD_SHADOWS, CARD_VARIANTS } from "../../../constants/ui";

function Card({
  variant = "normal",
  shadow = "none",
  className = "",
  children,
}) {
  const classes = [
    "card",
    CARD_VARIANTS[variant] ?? CARD_VARIANTS.normal,
    CARD_SHADOWS[shadow] ?? CARD_SHADOWS.none,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classes}>{children}</div>;
}

export default Card;