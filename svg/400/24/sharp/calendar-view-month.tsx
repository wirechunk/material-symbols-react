import type { SVGProps } from "react";
export const SvgCalendarViewMonth = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-520h160v-200H160v200Zm240 0h160v-200H400v200Zm240 0h160v-200H640v200ZM160-240h160v-200H160v200Zm240 0h160v-200H400v200Zm240 0h160v-200H640v200ZM80-160v-640h800v640H80Z" />
  </svg>
);
