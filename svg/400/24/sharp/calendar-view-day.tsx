import type { SVGProps } from "react";
export const SvgCalendarViewDay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-120v-80h720v80H120Zm0-160v-400h720v400H120Zm80-80h560v-240H200v240Zm-80-400v-80h720v80H120Zm80 400v-240 240Z" />
  </svg>
);
