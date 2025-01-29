import { cn } from "@/lib/utils";

export default function ProductPrice({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  const stringVal = value.toFixed(2);

  const [initValue, floatValue] = stringVal.split(".");

  return (
    <p className={cn("text-2xl", className)}>
      <span className="text-xs align-super">$</span>
      {initValue}
      <span className="text-xs align-super">{floatValue}</span>
    </p>
  );
}
