export default function Select({
  options = [],
  className = "",
  children,
  ...props
}) {
  const classes = [
    "select select-bordered w-full",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <select className={classes} {...props}>
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          disabled={option.disabled}
        >
          {option.label}
        </option>
      ))}

      {children}
    </select>
  );
}
