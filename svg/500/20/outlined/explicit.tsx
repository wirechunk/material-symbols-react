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
    <path d="M358.09-286.09h243.82v-75.82h-168v-80.18h168v-75.82h-168v-80.18h168v-75.82H358.09v387.82ZM218.87-135.87q-34.48 0-58.74-24.26-24.26-24.26-24.26-58.74v-522.26q0-34.48 24.26-58.74 24.26-24.26 58.74-24.26h522.26q34.48 0 58.74 24.26 24.26 24.26 24.26 58.74v522.26q0 34.48-24.26 58.74-24.26 24.26-58.74 24.26H218.87Zm0-83h522.26v-522.26H218.87v522.26Zm0-522.26v522.26-522.26Z" />
  </svg>
);
