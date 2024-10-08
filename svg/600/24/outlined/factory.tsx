import type { SVGProps } from "react";
export const SvgFactory = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M62.48-62.48V-572.3l315.04-134.27v81.13l200-80.56v128.7h320v514.82H62.48Zm106-106h623.04v-302.9H475.48V-549l-200 80v-79.13l-107 46.78v332.87ZM431.52-240h96.96v-160h-96.96v160Zm-169.04 0H360v-160h-97.52v160ZM600-240h97.52v-160H600v160Zm297.52-337.52H677.74l40-315.48h137.52l42.26 315.48ZM168.48-168.48h623.04-623.04Z" />
  </svg>
);
