import type { SVGProps } from "react";
export const SvgTexture = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M181.77-160q-9.54-4.92-13.31-9.42-3.77-4.5-8.46-14.04L778-800q7.31 3.46 13.04 9.19 5.73 5.73 8.96 13.27L181.77-160ZM160-431.08v-44.46L484.46-800h44.46L160-431.08Zm0-292.3v-21.24q0-23.23 16.08-39.3Q192.15-800 215.38-800h21.24L160-723.38ZM723.38-160 800-236.62v21.24q0 23.23-16.08 39.3Q767.85-160 744.62-160h-21.24Zm-292.3 0L800-528.92v44.46L475.54-160h-44.46Z" />
  </svg>
);
