import type { SVGProps } from "react";
export const SvgToastFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M250-250h460v-60H250v60ZM140-140v-680h680v680H140Z" />
  </svg>
);
