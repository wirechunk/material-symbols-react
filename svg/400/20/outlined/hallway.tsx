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
    <path d="M216-96q-29.7 0-50.85-21.15Q144-138.3 144-168v-528q0-29.7 21.15-50.85Q186.3-768 216-768h72l192-192 192 192h72q29.7 0 50.85 21.15Q816-725.7 816-696v528q0 29.7-21.15 50.85Q773.7-96 744-96H216Zm0-72h528v-528H216v528Zm48-72h432L552-432 444-288l-72-96-108 144Zm92-528h248L480-892 356-768ZM216-168v-528 528Z" />
  </svg>
);
