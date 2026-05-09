import Badge from "../atoms/Badge";

const STATUS_CONFIG = {
  online: {
    label: "Online",
    variant: "success",
    styleType: "outline",
  },
  offline: {
    label: "Offline",
    variant: "neutral",
    styleType: "outline",
  },
  error: {
    label: "Error",
    variant: "error",
    styleType: "solid",
  },
  loading: {
    label: "Loading",
    variant: "warning",
    styleType: "soft",
  },
};

export default function StatusBadge({
  status = "offline",
  size = "md",
  className = "",
}) {
  const config = STATUS_CONFIG[status];

  if (!config) {
    console.warn(`StatusBadge: unknown status "${status}"`);
  }

  const safeConfig = config ?? {
    label: "Unknown",
    variant: "neutral",
    styleType: "outline",
  };

  return (
    <Badge
      variant={safeConfig.variant}
      size={size}
      styleType={safeConfig.styleType}
      className={className}
    >
      {safeConfig.label}
    </Badge>
  );
}