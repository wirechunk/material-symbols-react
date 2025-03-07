import type { SVGProps } from "react";
export const SvgRule = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="m564.46-200-21.23-21.23 107.15-107.15-107.15-107.16 21.23-21.23 107.16 107.15 107.15-107.15L800-435.54 692.85-328.38 800-221.23 778.77-200 671.62-307.15 564.46-200Zm81.46-339.38L532.38-652.92l21.24-21.23 92.3 91.3 173.62-174.38L840.77-735 645.92-539.38ZM120-320v-30.77h320V-320H120Zm0-289.23V-640h320v30.77H120Z" />
  </svg>
);
