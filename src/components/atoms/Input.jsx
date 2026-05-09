import { INPUT_VARIANTS, INPUT_SIZES } from "../../constants/ui";

function Input({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const classes = [
    "input",
    INPUT_VARIANTS[variant] ?? INPUT_VARIANTS.primary,
    INPUT_SIZES[size] ?? INPUT_SIZES.md,
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return <input className={classes} {...props} />;
}

export default Input;