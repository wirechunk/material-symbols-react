import type { SVGProps } from "react";
export const SvgVolcanoFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m96-96 144-336h144l48-192h288L864-96H96Zm444-672v-144h72v144h-72Zm164 67-51-51 102-102 51 51-102 102Zm-256 0L347-803l50-51 102 102-51 51Z" />
  </svg>
);
