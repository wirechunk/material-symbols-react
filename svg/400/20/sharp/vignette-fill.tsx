import type { SVGProps } from "react";
export const SvgVignetteFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-192v-576h768v576H96Zm384-120q100 0 170-49t70-119q0-70-70-119t-170-49q-100 0-170 49t-70 119q0 70 70 119t170 49Z" />
  </svg>
);
