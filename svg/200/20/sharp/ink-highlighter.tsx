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
    <path d="m548-422.31-45-45-45-46L252.69-308l91 91L548-422.31Zm-66.46-114.54 45 46 45 45L779.69-654l-90-91-208.15 208.15Zm-324 362.08 91.38-91.38-22.23-22.23v-39.24L446.08-547l136.61 136.62L363.31-191h-39.23l-23.77-23.77-40 40H157.54ZM446.08-547l243.61-243.62L826.31-654 582.69-410.38 446.08-547Z" />
  </svg>
);
