import type { SVGProps } from "react";
export const SvgCollapseContent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M440-440v220h-60v-160H220v-60h220Zm140-300v160h160v60H520v-220h60Z" />
  </svg>
);
