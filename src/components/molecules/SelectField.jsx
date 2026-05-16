import Select from "../atoms/Select";

export default function SelectField({
  title,
  description = "",
  options = [],
  className = "",
  ...props
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

      <Select
        options={options}
        className="w-auto min-w-40"
        {...props}
      />
    </label>
  );
}