import type { SVGProps } from "react";
export const SvgKettle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M240-216v-504l-96-144h576v120h72q29.7 0 50.85 21.15Q864-701.7 864-672v192q0 29.7-21.15 50.85Q821.7-408 792-408h-72v192H240Zm72-72h336v-504H278l34 50.4V-288Zm408-192h72v-192h-72v192ZM480-336h120v-408H480v408ZM144-96v-72h672v72H144Zm319-444Z" />
  </svg>
);
