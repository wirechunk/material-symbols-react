import type { SVGProps } from "react";
export const SvgHallway = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-96v-672h144l192-192 192 192h144v672H144Zm72-72h528v-528H216v528Zm48-72h432L552-432 444-288l-72-96-108 144Zm92-528h248L480-892 356-768ZM216-168v-528 528Z" />
  </svg>
);
