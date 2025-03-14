import type { SVGProps } from "react";
export const SvgViewKanban = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M300-300h40v-360h-40v360Zm160-200h40v-160h-40v160Zm160 120h40v-280h-40v280ZM160-160v-640h640v640H160Zm40-40h560v-560H200v560Zm0 0v-560 560Z" />
  </svg>
);
