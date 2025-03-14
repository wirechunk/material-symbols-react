import type { SVGProps } from "react";
export const SvgViewWeek = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-240h160v-480H160v480Zm240 0h160v-480H400v480Zm240 0h160v-480H640v480Zm240 80H80v-640h800v640Z" />
  </svg>
);
