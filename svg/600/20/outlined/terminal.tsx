import type { SVGProps } from "react";
export const SvgTerminal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M174.78-172.78q-41 0-69.5-28.51t-28.5-69.53V-689.5q0-41.02 28.5-69.37t69.5-28.35h610.44q41 0 69.5 28.51t28.5 69.53v418.68q0 41.02-28.5 69.37t-69.5 28.35H174.78Zm0-98h610.44v-346.44H174.78v346.44ZM300-312l-51-51 81-81-81-81 51-51 132 132-132 132Zm180 0v-72h240v72H480Z" />
  </svg>
);
