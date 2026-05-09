export default function CardTitle({ children, className = "" }) {
    const classes = ["card-title", className].filter(Boolean).join(" ");
    return <h2 className={classes}>{children}</h2>;
}