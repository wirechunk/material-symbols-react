import type { SVGProps } from "react";
export const SvgPackage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m408-525.92 72-36 72 36V-744H408v218.08ZM288-308v-32h192v32H288ZM184-184v-592h592v592H184Zm32-560v528-528Zm0 528h528v-528H584v270.46l-104-52-104 52V-744H216v528Z" />
  </svg>
);
