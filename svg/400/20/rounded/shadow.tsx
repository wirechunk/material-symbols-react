import type { SVGProps } from "react";
export const SvgShadow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M168-96q-29.7 0-50.85-21.15Q96-138.3 96-168v-480q0-29.7 21.12-50.85Q138.23-720 167.88-720h71.89v-72q0-29.7 21.11-50.85Q282-864 312-864h480q29.7 0 50.85 21.15Q864-821.7 864-792v480q0 29.7-21.12 50.85Q821.77-240 792.12-240h-71.89v72q0 29.7-21.11 50.85Q678-96 648-96H168Zm144-216h480v-480H312v480Z" />
  </svg>
);
