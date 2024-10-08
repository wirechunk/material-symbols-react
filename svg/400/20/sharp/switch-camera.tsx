import type { SVGProps } from "react";
export const SvgSwitchCamera = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-144v-576h192l72-96h240l72 96h192v576H96Zm72-72h624v-432H636l-72-96H396l-72 96H168v432Zm312-217Zm-96 145 51-51-57-57h204l-57 57 51 51 144-144-144-144-51 51 57 57H378l57-57-51-51-144 144 144 144Z" />
  </svg>
);
