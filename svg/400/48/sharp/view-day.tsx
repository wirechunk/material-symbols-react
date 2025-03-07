import type { SVGProps } from "react";
export const SvgViewDay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-160v-60h720v60H120Zm0-171v-298h720v298H120Zm60-60h600v-178H180v178Zm-60-349v-60h720v60H120Zm60 349v-178 178Z" />
  </svg>
);
