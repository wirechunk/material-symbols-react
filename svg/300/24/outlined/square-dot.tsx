import type { SVGProps } from "react";
export const SvgSquareDot = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M140-140v-680h680v680H140Zm60-60h560v-560H200v560Zm280-135q-60.23 0-102.61-42.39Q335-419.77 335-480t42.39-102.61Q419.77-625 480-625t102.61 42.39Q625-540.23 625-480t-42.39 102.61Q540.23-335 480-335Z" />
  </svg>
);
