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
    <path d="m400-546.92 80-40 80 40V-760H400v213.08ZM280-300v-40h200v40H280ZM160-160v-640h640v640H160Zm40-600v560-560Zm0 560h560v-560H600v278.46l-120-60-120 60V-760H200v560Z" />
  </svg>
);
