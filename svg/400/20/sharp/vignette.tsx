import type { SVGProps } from "react";
export const SvgVignette = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-312q100 0 170-49t70-119q0-70-70-119t-170-49q-100 0-170 49t-70 119q0 70 70 119t170 49Zm0-72q-70 0-119-28t-49-68q0-40 49-68t119-28q70 0 119 28t49 68q0 40-49 68t-119 28ZM96-192v-576h768v576H96Zm72-72h624v-432H168v432Zm0 0v-432 432Z" />
  </svg>
);
