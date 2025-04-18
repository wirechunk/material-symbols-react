import type { SVGProps } from "react";
export const SvgLiving = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-96v-768h768v768H96Zm72-72h624v-624H168v624Zm48-72h528v-312h-48v-168H264v168h-48v312Zm72-72v-168h48v96h288v-96h48v168H288Zm120-144v-96h-72v-96h288v96h-72v96H408ZM168-168v-624 624Z" />
  </svg>
);
