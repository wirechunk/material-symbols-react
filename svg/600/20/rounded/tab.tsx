import type { SVGProps } from "react";
export const SvgTab = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M174.78-270.78h610.44V-528H577q-20.39 0-34.69-14.31Q528-556.61 528-577v-112.22H174.78v418.44Zm0 98q-41 0-69.5-28.51t-28.5-69.53V-689.5q0-41.02 28.5-69.37t69.5-28.35h610.44q41 0 69.5 28.51t28.5 69.53v418.68q0 41.02-28.5 69.37t-69.5 28.35H174.78Zm0-98v-418.44 418.44Z" />
  </svg>
);
