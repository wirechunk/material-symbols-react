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
    <path d="M260-260h137v-133h103v-133h103v-134h97v-40H563v133H460v133H357v134h-97v40ZM160-160v-640h640v640H160Zm40-40h560v-560H200v560Zm0 0v-560 560Z" />
  </svg>
);
