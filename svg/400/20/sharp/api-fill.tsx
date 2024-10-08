import type { SVGProps } from "react";
export const SvgApiFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m480-384-96-96 96-96 96 96-96 96Zm-86-250-96-96 182-182 182 182-96 96-86-86-86 86ZM230-298 48-480l182-182 96 96-86 86 86 86-96 96Zm500 0-96-96 86-86-86-86 96-96 182 182-182 182ZM480-48 298-230l96-96 86 86 86-86 96 96L480-48Z" />
  </svg>
);
