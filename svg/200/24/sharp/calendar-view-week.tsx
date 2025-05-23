import type { SVGProps } from "react";
export const SvgCalendarViewWeek = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M500-240h130v-480H500v480Zm-170 0h130v-480H330v480Zm-170 0h130v-480H160v480Zm510 0h130v-480H670v480Zm-550 40v-560h720v560H120Z" />
  </svg>
);
