import type { SVGProps } from "react";
export const SvgInkHighlighter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m548-416.15-45-45-45-46L258.85-308l91 91L548-416.15Zm-52.23-128.77 45 46 45 45L785.85-654l-90-91-200.08 200.08Zm-369 385.53 103.69-103.69-22.61-22.61v-44.62L439.54-562l164.3 164.31L372.15-166h-44.61l-23.39-23.39-30 30H126.77ZM439.54-562l256.31-256.31L860.15-654 603.84-397.69 439.54-562Z" />
  </svg>
);
