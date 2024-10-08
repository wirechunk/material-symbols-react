import type { SVGProps } from "react";
export const SvgRipples = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M206.78-206.78h546.44v-321.09q-17.44 8.74-35.88 13.11-18.45 4.37-37.34 4.37-70.52 0-120.07-49.54-49.54-49.55-49.54-120.07 0-18.89 4.37-37.34 4.37-18.44 13.11-35.88H206.78v546.44Zm-106 106v-758.44h758.44v758.44H100.78Zm106-652.44v546.44-546.44Z" />
  </svg>
);
