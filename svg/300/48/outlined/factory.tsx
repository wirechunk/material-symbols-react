import type { SVGProps } from "react";
export const SvgFactory = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M100-100v-447.54l240-102.07v79.23L540-651v111h320v440H100Zm45.39-45.39h669.22v-349.08h-320v-89.45l-200 80v-78.62l-149.22 66v371.15Zm306.53-103.84h56.16v-141.54h-56.16v141.54Zm-160 0h56.16v-141.54h-56.16v141.54Zm320 0h56.16v-141.54h-56.16v141.54ZM860-540H712.31l40-304.61h70L860-540ZM145.39-145.39h669.22-669.22Z" />
  </svg>
);
