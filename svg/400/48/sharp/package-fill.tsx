import type { SVGProps } from "react";
export const SvgPackageFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M280-280h200v-80H280v80ZM120-120v-720h720v720H120Zm200-660v329l160-80 160 80v-329H320Z" />
  </svg>
);
