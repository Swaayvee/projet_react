import Toggle from "../atoms/Toggle";

function ToggleField({
  title,
  description = "",
  checked = false,
  onChange,
  size = "md",
  variant = "primary",
  className = "",
}) {
  return (
    <label
      className={[
        "flex items-center justify-between gap-4 rounded-xl p-4",
        "bg-base-200 cursor-pointer",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="flex flex-col">
        <span className="font-medium text-base-content">
          {title}
        </span>

        {description && (
          <span className="text-sm text-base-content/70">
            {description}
          </span>
        )}
      </div>

      <Toggle
        checked={checked}
        onChange={onChange}
        size={size}
        variant={variant}
      />
    </label>
  );
}

export default ToggleField;