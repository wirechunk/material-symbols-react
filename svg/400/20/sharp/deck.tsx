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
    <path d="M444-96v-480H96l384-288 384 288H516v480h-72Zm36-552h168-336 168ZM144-96v-164l-35-164 70-16 29 140h152v204h-72v-132h-72v132h-72Zm456 0v-204h151l30-140 70 16-35 164v164h-72v-132h-72v132h-72ZM312-648h336L480-774 312-648Z" />
  </svg>
);
