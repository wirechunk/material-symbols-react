import type { SVGProps } from "react";
export const SvgMonitor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M263.85-140v-70.77l35.38-35.38H172.31q-30.31 0-51.31-21-21-21-21-51.31v-429.23Q100-778 121-799q21-21 51.31-21h615.38Q818-820 839-799q21 21 21 51.31v429.23q0 30.31-21 51.31-21 21-51.31 21H660.77l35.38 35.38V-140h-432.3Zm-91.54-166.15h615.38q4.62 0 8.46-3.85 3.85-3.85 3.85-8.46v-429.23q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H172.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v429.23q0 4.61 3.85 8.46 3.84 3.85 8.46 3.85Zm-12.31 0V-760v453.85Z" />
  </svg>
);
