import type { SVGProps } from "react";
export const SvgComment = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M240-400h480v-60H240v60Zm0-130h480v-60H240v60Zm0-130h480v-60H240v60ZM80-240v-640h800v800L720-240H80Zm60-60h606l74 80v-600H140v520Zm0 0v-520 520Z" />
  </svg>
);
