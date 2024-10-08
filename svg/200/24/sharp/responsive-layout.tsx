import type { SVGProps } from "react";
export const SvgResponsiveLayout = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-160v-440h200v-200h440v640H160Zm440-40h160v-560H400v160h200v400Zm-200 0h160v-360H400v360Zm-200 0h160v-360H200v360Zm400-400v40-40Zm-240 40Zm200 0Zm40-40Z" />
  </svg>
);
