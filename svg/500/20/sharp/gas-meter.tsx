import type { SVGProps } from "react";
export const SvgGasMeter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M183.87-87.87v-708.39h166.56v-75.87h83v75.87h93.14v-75.87h83v75.87h166.32v708.39H183.87Zm83-83h426.02v-542.39H266.87v542.39Zm67.22-393.17h291.58v-83H334.09v83ZM480.5-261.37q37.5 0 66.5-27.63 29-27.62 29-67.37 0-31-20-56t-76-89q-56 64-76 89t-20 56.02q0 39.73 29.5 67.36 29.5 27.62 67 27.62Zm-213.63 90.5v-542.39 542.39Z" />
  </svg>
);
