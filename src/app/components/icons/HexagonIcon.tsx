interface HexagonIconProps {
  className?: string;
  stroke?: string;
  strokeWidth?: number;
}

export function HexagonIcon({
  className,
  stroke,
  strokeWidth,
}: HexagonIconProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      className={className}
      stroke={stroke}
      strokeWidth={strokeWidth}
    >
      <polygon points="50,3 95,25 95,75 50,97 5,75 5,25" />
    </svg>
  );
}
