import type { SVGProps } from "react";
export const SvgAtm = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M392.74-379.48v-144h-63.52v-57.04h183.52v57.04h-63.52v144h-56.48Zm-261.74 0V-552q0-12.12 8.2-20.32 8.2-8.2 20.32-8.2h96q11.88 0 19.92 8.2 8.04 8.2 8.04 20.32v172.52H227v-48h-39.52v48H131Zm56.48-105.04H227v-38.96h-39.52v38.96Zm367.04 105.04V-552q0-12.12 8.04-20.32 8.04-8.2 19.92-8.2h218q12.12 0 20.32 8.2 8.2 8.2 8.2 20.32v172.52h-56.48v-144H720v96h-56.48v-96H611v144h-56.48Z" />
  </svg>
);
