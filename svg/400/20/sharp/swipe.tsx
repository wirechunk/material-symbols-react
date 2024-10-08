import type { SVGProps } from "react";
export const SvgSwipe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M864-672H672v-48h113q-53-72-134-108t-171-36q-90 0-171 36T175-720h113v48H96v-192h48v106q60-78 149-116t187-38q98 0 187 38t149 116v-106h48v192ZM393-96 160-329l59-59 117 29v-361h72v455l-111-28 125 125h274v-312h72v384H393Zm63-288v-192h72v192h-72Zm120 0v-144h72v144h-72Zm-20 84Z" />
  </svg>
);
