import type { SVGProps } from "react";
export const SvgExplicitFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M370-290h220v-60H430v-100h160v-60H430v-100h160v-60H370v380ZM140-140v-680h680v680H140Z" />
  </svg>
);
