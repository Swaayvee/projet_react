export default function CardFigure({ children, className = "" }) {
  const classes = ["card-figure", "overflow-hidden", className]
    .filter(Boolean)
    .join(" ");

  return <figure className={classes}>{children}</figure>;
}
