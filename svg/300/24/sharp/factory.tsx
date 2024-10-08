import type { SVGProps } from "react";
export const SvgFactory = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M100-100v-447.54l240-102.07v79.23l200-80V-540h320v440H100Zm60-60h640v-320H480v-82l-200 80v-78l-120 53v347Zm284.62-89.23h70.76v-141.54h-70.76v141.54Zm-160 0h70.76v-141.54h-70.76v141.54Zm320 0h70.76v-141.54h-70.76v141.54ZM860-540H697.69l40-304.61h84.62L860-540ZM160-160h640-640Z" />
  </svg>
);
