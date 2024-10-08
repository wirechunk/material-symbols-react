import type { SVGProps } from "react";
export const SvgHov = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-96 252-480l228-384 228 384L480-96Zm0-141 144-243-144-243-144 243 144 243Zm0-243Z" />
  </svg>
);
