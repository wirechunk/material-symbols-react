import type { SVGProps } from "react";
export const SvgAreaChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m512.15-741.69 146 109.69h84.31q14.32 0 23.93 9.61t9.61 23.93V-232H184v-308.39q0-17.72 14.77-25.24t29.2 1.64l69.26 44.91 170.31-218.3q8.77-9.93 21.73-10.24 12.96-.3 22.88 5.93ZM216-538v135.6L336-312l144-197 264 211v-302h-96L492-717 303-480l-87-58Z" />
  </svg>
);
