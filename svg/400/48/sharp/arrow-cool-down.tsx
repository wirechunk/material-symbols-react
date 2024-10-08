import type { SVGProps } from "react";
export const SvgArrowCoolDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-80 200-360l42-42 208 208v-306h60v306l208-208 42 42L480-80Zm-30-480v-140h60v140h-60Zm0-200v-120h60v120h-60Z" />
  </svg>
);
