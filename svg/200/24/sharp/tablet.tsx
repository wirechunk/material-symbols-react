import type { SVGProps } from "react";
export const SvgTablet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M80-200v-560h800v560H80Zm100-520h-60v480h60v-480Zm40 480h520v-480H220v480Zm560-480v480h60v-480h-60Zm0 0h60-60Zm-600 0h-60 60Z" />
  </svg>
);
