import type { SVGProps } from "react";
export const SvgPageless = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M400-71.87H122.87q-37.78 0-64.39-26.61t-26.61-64.39V-400h91v237.13H400v91Zm160 0v-91h277.37V-400h91v237.13q0 37.78-26.61 64.39t-64.39 26.61H560ZM31.87-560v-237.13q0-37.78 26.61-64.39t64.39-26.61H400v91H122.87V-560h-91Zm805.5 0v-237.13H560v-91h277.37q37.78 0 64.39 26.61t26.61 64.39V-560h-91Z" />
  </svg>
);
