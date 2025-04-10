import type { SVGProps } from "react";
export const SvgResponsiveLayout = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M102.48-105.87V-639.7h221.78v-221.21h533.26v755.04H102.48Zm533.82-79.22h141.44v-596.04H403.48v141.43H636.3v454.61Zm-232.82 0h153.04v-374.82H403.48v374.82Zm-221.22 0h142v-374.82h-142v374.82ZM636.3-639.7v79.79-79.79Zm-312.04 79.79Zm232.26 0Zm79.78-79.79Z" />
  </svg>
);
