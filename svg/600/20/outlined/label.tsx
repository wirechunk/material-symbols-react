import type { SVGProps } from "react";
export const SvgLabel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M174.78-172.78q-41 0-69.5-28.51t-28.5-69.53V-689.5q0-41.02 28.5-69.37t69.5-28.35h406.44q23.22 0 44 10.35 20.78 10.36 35.48 29.39L859.22-480 660.7-212.52q-14.7 19.03-35.48 29.39-20.78 10.35-44 10.35H174.78Zm-.56-97.44h408.13L737.56-480 582.35-689.78H174.22v419.56ZM378.57-480Z" />
  </svg>
);
