export default function CardBody({ children, className = "" }) {
    const classes = ["card-body", className].filter(Boolean).join(" ");
    return <div className={classes}>{children}</div>;
}