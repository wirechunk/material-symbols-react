import type { SVGProps } from "react";
export const SvgDisabledByDefault = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="m336-273.78 144-144 144 144L686.22-336l-144-144 144-144L624-686.22l-144 144-144-144L273.78-624l144 144-144 144L336-273.78Zm-129.22 173q-44.3 0-75.15-30.85-30.85-30.85-30.85-75.15v-546.44q0-44.3 30.85-75.15 30.85-30.85 75.15-30.85h546.44q44.3 0 75.15 30.85 30.85 30.85 30.85 75.15v546.44q0 44.3-30.85 75.15-30.85 30.85-75.15 30.85H206.78Zm0-106h546.44v-546.44H206.78v546.44Zm0-546.44v546.44-546.44Z" />
  </svg>
);
