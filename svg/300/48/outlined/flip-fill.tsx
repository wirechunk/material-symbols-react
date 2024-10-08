import type { SVGProps } from "react";
export const SvgFlipFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M350.54-140H197.88q-23.78 0-40.83-17.1Q140-174.19 140-197.69v-564.62q0-23.5 17.1-40.59 17.09-17.1 40.59-17.1h152.85v45.39H197.69q-5.38 0-8.84 3.46t-3.46 8.84v564.62q0 5.38 3.46 8.84t8.84 3.46h152.85V-140ZM458.92-40v-872.31h45.39V-40h-45.39Zm153.77-100v-50h50v50h-50Zm0-630v-50h50v50h-50ZM770-140v-50h50q0 20.77-14.84 35.38Q790.33-140 770-140Zm0-157.69v-50h50v50h-50ZM770-455v-50h50v50h-50Zm0-157.69v-50h50v50h-50ZM770-770v-50q20.33 0 35.16 14.84Q820-790.33 820-770h-50Z" />
  </svg>
);
