import type { SVGProps } from "react";
export const SvgLabPanel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M40-120v-360h80v-163H80v-197h360v197h-40v163h160v-163h-40v-197h360v197h-40v163h80v360H40Zm540-580h240v-80H580v80Zm-440 0h240v-80H140v80Zm480 220h160v-160H620v160Zm-440 0h160v-160H180v160Zm-80 300h760v-240H100v240Zm40-520v-80 80Zm440 0v-80 80ZM100-180v-240 240Z" />
  </svg>
);
