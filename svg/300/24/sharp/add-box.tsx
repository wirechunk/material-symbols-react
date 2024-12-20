import type { SVGProps } from "react";
export const SvgAddBox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M450-290h60v-160h160v-60H510v-160h-60v160H290v60h160v160ZM140-140v-680h680v680H140Zm60-60h560v-560H200v560Zm0 0v-560 560Z" />
  </svg>
);
