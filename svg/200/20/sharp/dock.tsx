import type { SVGProps } from "react";
export const SvgDock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M356-131.23v-32h248v32H356ZM631.69-288v-528H328.31v528h303.38ZM481.38-683.69q11.31 0 19.12-7.65 7.81-7.65 7.81-18.97 0-11.31-7.65-19.11-7.65-7.81-18.96-7.81-11.32 0-19.12 7.65-7.81 7.65-7.81 18.96t7.65 19.12q7.65 7.81 18.96 7.81ZM328.31-816v528-528Zm-32 560v-592h367.38v131.92h25.23v102h-25.23V-256H296.31Z" />
  </svg>
);
