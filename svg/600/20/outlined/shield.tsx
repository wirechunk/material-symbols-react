import type { SVGProps } from "react";
export const SvgShield = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-76.22Q336.65-110.8 242.72-236.3 148.78-361.79 148.78-515v-242.26L480-883.78l331.22 126.52V-515q0 153.21-93.94 278.7Q623.35-110.8 480-76.22Zm0-101q100.04-35.64 166.63-129 66.59-93.36 66.59-208.52v-175.17L480-779.09l-233.22 89.45V-515q0 115.42 66.59 208.78t166.63 129Zm0-300.65Z" />
  </svg>
);
