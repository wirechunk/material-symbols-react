import type { SVGProps } from "react";
export const SvgTab = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-240h640v-320H520v-160H160v480Zm-40 40v-560h720v560H120Zm40-40v-480 480Z" />
  </svg>
);
