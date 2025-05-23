import type { SVGProps } from "react";
export const SvgFactory = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M136-136v-389.08l184-86.15v82.46l192-84V-512h312v376H136Zm32-32h624v-312H480v-82l-192 84v-82l-120 55v337Zm285.23-90.46h53.54v-131.08h-53.54v131.08Zm-156 0h53.54v-131.08h-53.54v131.08Zm312 0h53.54v-131.08h-53.54v131.08ZM824-512H707.38l48-281.23h25.24L824-512ZM168-168h624-624Z" />
  </svg>
);
