import type { SVGProps } from "react";
export const SvgEditSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-144v-672h418l-72 72H216v528h528v-274l72-72v418H144Zm336-336Zm-96 96v-153l405-405 153 153-405 405H384Zm456-405-51-51 51 51ZM456-456h51l231-231-25-26-26-25-231 231v51Zm257-257-26-25 26 25 25 26-25-26Z" />
  </svg>
);
