import type { SVGProps } from "react";
export const SvgResponsiveLayout = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M184-184v-400h192v-192h400v592H184Zm400-32h160v-528H408v160h176v368Zm-176 0h144v-336H408v336Zm-192 0h160v-336H216v336Zm368-368v32-32Zm-208 32Zm176 0Zm32-32Z" />
  </svg>
);
