import type { SVGProps } from "react";
export const SvgVignette = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-312q100 0 170-49t70-119q0-70-70-119t-170-49q-100 0-170 49t-70 119q0 70 70 119t170 49Zm0-92.35q-62.09 0-104.87-21.89-42.78-21.9-42.78-53.76t42.78-53.76q42.78-21.89 104.87-21.89t104.87 21.89q42.78 21.9 42.78 53.76t-42.78 53.76Q542.09-404.35 480-404.35ZM76.78-172.78v-614.44h806.44v614.44H76.78Zm98-98h610.44v-418.44H174.78v418.44Zm0 0v-418.44 418.44Z" />
  </svg>
);
