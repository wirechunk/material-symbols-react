import type { SVGProps } from "react";
export const SvgShortText = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-390v-60h389v60H160Zm0-120v-60h640v60H160Z" />
  </svg>
);
