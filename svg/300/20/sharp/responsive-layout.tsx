import type { SVGProps } from "react";
export const SvgResponsiveLayout = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M164-164v-440h192v-192h440v632H164Zm440-52h140v-528H408v140h196v388Zm-196 0h144v-336H408v336Zm-192 0h140v-336H216v336Zm388-388v52-52Zm-248 52Zm196 0Zm52-52Z" />
  </svg>
);
