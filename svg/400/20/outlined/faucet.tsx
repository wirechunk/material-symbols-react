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
    <path d="M96-360v-72h204v-60h-72q-15.3 0-25.65-10.29Q192-512.58 192-527.79T202.5-553q10.5-10 25.5-11h69q31-1 53 21t22 54v57h72v-276q0-65 45.38-110.5T600-864q45 0 82.03 22.93Q719.06-818.13 739-778l44 89-64 32-45-89q-11-21-31-33.5T600-792q-35 0-59.5 24.5T516-708v276h72v-57q0-32 22-54t53-21h69q15 1 25.5 11.09t10.5 25Q768-513 757.5-502T732-492h-72v60h204v72H96Zm144 216q-29.7 0-50.85-21.15Q168-186.3 168-216v-144h72v144h480v-144h72v142q0 30.52-21.15 52.26T720-144H240Z" />
  </svg>
);
