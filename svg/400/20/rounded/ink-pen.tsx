import type { SVGProps } from "react";
export const SvgInkPen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m484-526 42 42 208-208-42-42-208 208ZM216-216h42l218-218-42-42-218 218v42Zm336-192L408-552l136-136-51-51-176 176q-11 11-25 11t-25-11q-11-11-11-25.5t11-25.5l176-176q21-21 50.5-21t50.5 21l51 51 63-63q14-14 34-14t34 14l76 76q14 14 13.5 33.5T802-658L552-408ZM180-144q-15 0-25.5-10.5T144-180v-78q0-14 5-27t16-24l243-243 144 144-243 243q-11 11-24 16t-27 5h-78Z" />
  </svg>
);
