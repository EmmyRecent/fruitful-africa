import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { cn } from "@/lib/utils";

type CardStatProps = {
  title: string;
  value: string | number;
  change?: string | number;
  changeLabel?: string;
  icon: LucideIcon;
  className?: string;
};

const CardStat = ({
  title,
  value,
  change,
  changeLabel,
  icon: Icon,
  className,
}: CardStatProps) => {
  // Determine if change is positive or negative
  const isPositive =
    change !== undefined &&
    (typeof change === "string" ? !change.startsWith("-") : change >= 0);

  // Format the change value
  const formatChange = (changeValue: string | number) => {
    if (typeof changeValue === "number") {
      return `${changeValue >= 0 ? "+" : ""}${changeValue}%`;
    }
    return changeValue;
  };

  return (
    <Card
      className={cn("border border-gray-200 bg-white p-6 shadow-sm", className)}
    >
      <CardContent className="flex items-start justify-between gap-4 p-0">
        <div className="flex flex-1 flex-col gap-2">
          <h3 className="text-tertiaryColor text-sm font-medium">{title}</h3>
          <p className="text-secondaryColor text-2xl font-medium">
            {typeof value === "number" ? value.toLocaleString() : value}
          </p>
          {change !== undefined && (
            <p
              className={cn(
                "text-sm font-medium",
                isPositive ? "text-green-600" : "text-red-600",
              )}
            >
              {formatChange(change)}
              {changeLabel && ` ${changeLabel}`}
            </p>
          )}
        </div>

        <div className="shrink-0 rounded-full bg-amber-50 p-3">
          <Icon
            className={cn(
              "size-6",
              change === undefined || isPositive
                ? "text-green-600"
                : "text-red-600",
            )}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default CardStat;
