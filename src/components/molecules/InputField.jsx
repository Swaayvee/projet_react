import Input from "./../atoms/Input";

function InputField({
  label,
  error,
  helperText,
  layout = "col",
  labelWidth = "w-32",
  id,
  className = "",
  ...props
}) {
  const inputId = id || props.name;

  const isRow = layout === "row";

  return (
    <div
      className={[
        isRow ? "flex items-center gap-4" : "flex flex-col gap-1",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {label && (
        <label
          htmlFor={inputId}
          className={[
            "text-sm font-medium",
            isRow ? `${labelWidth} shrink-0` : "",
          ].join(" ")}
        >
          {label}
        </label>
      )}

      <div className="flex flex-col flex-1 gap-1">
        <Input
          id={inputId}
          variant ={error ? "error" : "normal"}
          {...props}
        />

        {error ? (
          <span className="text-error text-xs">{error}</span>
        ) : helperText ? (
          <span className="text-base-content/70 text-xs">{helperText}</span>
        ) : null}
      </div>
    </div>
  );
}

export default InputField;
