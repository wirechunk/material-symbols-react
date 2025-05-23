import type { SVGProps } from "react";
export const SvgToolbar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M100.78-100.78v-758.44h758.44v758.44H100.78Zm106-542.61h546.44v-109.83H206.78v109.83Zm546.44 106H206.78v330.61h546.44v-330.61Zm-546.44-106v106-106Zm0 0v-109.83 109.83Zm0 106v330.61-330.61Z" />
  </svg>
);
