import type { SVGProps } from "react";
export const SvgFaucet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-360v-72h204v-60H192v-72h180v132h72v-276q0-65 45.38-110.5T600-864q45 0 82.03 22.93Q719.06-818.13 739-778l44 89-64 32-45-89q-11-21-31-33.5T600-792q-35 0-59.5 24.5T516-708v276h72v-132h180v72H660v60h204v72H96Zm72 216v-216h72v144h480v-144h72v216H168Z" />
  </svg>
);
