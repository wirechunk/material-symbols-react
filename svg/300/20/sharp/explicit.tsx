import type { SVGProps } from "react";
export const SvgExplicit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M370-298h220v-52H422v-104h168v-52H422v-104h168v-52H370v364ZM164-164v-632h632v632H164Zm52-52h528v-528H216v528Zm0 0v-528 528Z" />
  </svg>
);
