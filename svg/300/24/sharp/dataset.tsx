import type { SVGProps } from "react";
export const SvgDataset = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M140-140v-680h680v680H140Zm60-60h560v-560H200v560Zm0 0v-560 560Zm90-330h140v-140H290v140Zm240 0h140v-140H530v140ZM290-290h140v-140H290v140Zm240 0h140v-140H530v140Z" />
  </svg>
);
