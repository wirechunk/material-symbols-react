import type { SVGProps } from "react";
export const SvgStairs = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M250-250h157v-133h103v-133h103v-134h97v-60H553v133H450v133H347v134h-97v60ZM140-140v-680h680v680H140Zm60-60h560v-560H200v560Zm0 0v-560 560Z" />
  </svg>
);
