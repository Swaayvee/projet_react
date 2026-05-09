export default function CardActions({ children, className = "" }) {
    const classes = ["card-actions", className].filter(Boolean).join(" ");
    return <div className={classes}>{children}</div>;
}