import type { SVGProps } from "react";
export const SvgPackage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="m400-558.46 80-40 80 40V-760H400v201.54ZM280-290v-60h200v60H280ZM140-140v-680h680v680H140Zm60-620v560-560Zm0 560h560v-560H620v299.23l-140-70-140 70V-760H200v560Z" />
  </svg>
);
