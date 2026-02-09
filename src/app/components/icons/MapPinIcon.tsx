interface IconProps {
  width?: number;
  height?: number;
  className?: string;
}

export function MapPinIcon({ width = 16, height = 16, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      className={className}
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 10.143C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C6.553 19.812 4 14.606 4 10.144Z" />
        <circle cx="12" cy="10" r="3" />
      </g>
    </svg>
  );
}
