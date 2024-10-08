import type { SVGProps } from "react";
export const SvgSchema = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M138.52-5.52V-280h100v-62.48h-100v-275.04h100V-680h-100v-274.48h309.96V-680h-100v62.48h100V-533h103.04v-84.52h309.96v275.04H551.52V-427H448.48v84.52h-100V-280h100V-5.52H138.52Zm106-106h97.96V-174h-97.96v62.48Zm0-336.96h97.96v-63.04h-97.96v63.04Zm413 0h97.96v-63.04h-97.96v63.04ZM244.52-786h97.96v-62.48h-97.96V-786Zm49.26-31.52Zm0 337.52Zm413 0Zm-413 337.52Z" />
  </svg>
);
