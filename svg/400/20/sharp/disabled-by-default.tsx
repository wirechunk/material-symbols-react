import type { SVGProps } from "react";
export const SvgDisabledByDefault = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M216-216h528v-528H216v528Zm-72 72v-672h672v672H144Zm206-155 130.19-130.19L610.37-299 661-349.63 530.81-479.81 661-610l-51-51-130.19 130.19L349.63-661 299-610.37l130.19 130.18L299-350l51 51Zm-134 83v-528 528Z" />
  </svg>
);
