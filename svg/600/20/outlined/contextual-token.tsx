import type { SVGProps } from "react";
export const SvgContextualToken = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M235.48-331.48h310.17v-118.17H235.48v118.17Zm358.87 0h130.17v-297.04H594.35v297.04ZM235.48-510.35h310.17v-118.17H235.48v118.17Zm-60.7 337.57q-41 0-69.5-28.51t-28.5-69.53V-689.5q0-41.02 28.5-69.37t69.5-28.35h610.44q41 0 69.5 28.51t28.5 69.53v418.68q0 41.02-28.5 69.37t-69.5 28.35H174.78Zm0-98h610.44v-418.44H174.78v418.44Zm0 0v-418.44 418.44Z" />
  </svg>
);
