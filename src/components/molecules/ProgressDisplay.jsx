import Progress from "../atoms/Progress";

export default function ProgressDisplay({
  value = 0,
  layout = "row",
  showValue = true,
  label,
  className = "",
}) {
  const safeValue = Math.min(100, Math.max(0, value));

  const isColumn = layout === "col";

  const divClasses = [
    "flex gap-3",
    isColumn ? "flex-col items-start" : "items-center",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={divClasses}>
      {label && (
        <span className="text-sm font-medium text-base-content/80">
          {label}
        </span>
      )}

      <Progress value={safeValue} />

      {showValue && (
        <span className="text-sm font-medium text-base-content/80 min-w-[40px] text-right">
          {safeValue}%
        </span>
      )}
    </div>
  );
}
