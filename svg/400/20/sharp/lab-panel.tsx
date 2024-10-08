import type { SVGProps } from "react";
export const SvgLabPanel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M48-144v-336h96v-148H96v-188h360v188h-48v148h144v-152h-48v-184h360v184h-48v152h96v336H48Zm528-552h216v-48H576v48Zm-408 0h216v-48H168v48Zm456 216h120v-148H624v148Zm-408 0h120v-144H216v144Zm-96 264h720v-192H120v192Zm48-480v-48 48Zm408 0v-48 48ZM120-216v-192 192Z" />
  </svg>
);
