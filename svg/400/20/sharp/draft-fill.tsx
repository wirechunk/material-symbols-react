import type { SVGProps } from "react";
export const SvgDraftFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M192-96v-768h384l192 192v576H192Zm336-528h168L528-792v168Z" />
  </svg>
);
