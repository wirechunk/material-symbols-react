import type { SVGProps } from "react";
export const SvgDeck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M435.52-87.52V-576h-374L480-893.39 898.48-576h-374v488.48h-88.96Zm44.48-578h152.17-304.34H480Zm-370.48 578v-171.35l-36.7-171.91 86.96-19.39 29 141.69h162.74v220.96H262v-132h-63.52v132h-88.96Zm498.96 0v-220.96h161.74l30-141.69 86.96 19.39-36.7 171.91v171.35h-88.96v-132H698v132h-89.52Zm-280.65-578h304.34L480-781.91 327.83-665.52Z" />
  </svg>
);
