import Card from "../molecules/card/Card";
import CardBody from "../molecules/card/CardBody";
import CardTitle from "../molecules/card/CardTitle";

function Widget({
  title,
  actions = null,
  className = "",
  children,
}) {
  return (
    <Card
      variant="normal"
      shadow="md"
      className={[
        "bg-base-200",
        "border border-base-300",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <CardBody className="p-4">
        {(title || actions) && (
          <div className="flex items-center justify-between gap-4 mb-4">
            {title && <CardTitle>{title}</CardTitle>}

            {actions && (
              <div className="flex items-center gap-2">
                {actions}
              </div>
            )}
          </div>
        )}
        <div className="space-y-4">
          {children}
        </div>
      </CardBody>
    </Card>
  );
}

export default Widget;