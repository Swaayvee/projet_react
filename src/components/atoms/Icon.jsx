import * as LucideIcons from "lucide-react";
import { ICON_SIZES, COLORS } from "../../constants/ui";

function Icon({
  name,
  size = "md",
  color = COLORS.normal,
  className = "",
  ...props
}) {

  const IconComponent = LucideIcons[name];

  if (!IconComponent) {
    return null;
  }

  return (
    <IconComponent
      size={ICON_SIZES[size] ?? ICON_SIZES.md}
      className={`${COLORS[color] ?? null} ${className}`}
      {...props}
    />
  );
}

export default Icon;