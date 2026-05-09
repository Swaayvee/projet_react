import Button from "../atoms/Button";
import Icon from "../atoms/Icon";

const ICON_SIZE_MAP = {
  sm: "sm",
  md: "md",
  lg: "lg",
};

export default function ButtonIcon({
  icon,
  iconColor,
  iconPosition = "left",
  children,
  variant,
  size = "md",
  className = "",
  iconOnly = false,
  ...props
}) {
  if (!icon) {
    return (
      <Button variant={variant} size={size} className={className} {...props}>
        {children}
      </Button>
    );
  }

  const iconNode = (
    <Icon
      name={icon}
      color={iconColor}
      size={ICON_SIZE_MAP[size] ?? "md"}
    />
  );

  return (
    <Button variant={variant} size={size} className={className} {...props}>
      {iconOnly && iconNode}

      {!iconOnly && iconPosition === "left" && iconNode}

      {!iconOnly && children}

      {!iconOnly && iconPosition === "right" && iconNode}
    </Button>
  );
}