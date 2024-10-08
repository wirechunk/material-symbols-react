import type { SVGProps } from "react";
export const SvgEqualizer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M192-192v-288h144v288H192Zm216 0v-576h144v576H408Zm216 0v-384h144v384H624Z" />
  </svg>
);
