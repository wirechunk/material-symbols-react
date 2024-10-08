import type { SVGProps } from "react";
export const SvgSmartDisplay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M420.48-328.3 625.7-459.91q10.82-7.18 10.82-20.33 0-13.15-10.82-19.85L420.48-631.7q-12.39-8.26-25.28-1.03-12.9 7.23-12.9 21.69v261.77q0 15.27 12.9 22.25 12.89 6.98 25.28-1.28Zm-245.7 155.52q-41 0-69.5-28.51t-28.5-69.53V-689.5q0-41.02 28.5-69.37t69.5-28.35h610.44q41 0 69.5 28.51t28.5 69.53v418.68q0 41.02-28.5 69.37t-69.5 28.35H174.78Zm0-98h610.44v-418.44H174.78v418.44Zm0 0v-418.44 418.44Z" />
  </svg>
);
