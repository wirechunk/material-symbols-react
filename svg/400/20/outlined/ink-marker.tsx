import type { SVGProps } from "react";
export const SvgInkMarker = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m314-144-34-34-61 61q-21 21-51 21t-51-21q-20-22-20.5-51.5T117-219l61-61-34-34 481-481q21-21 50.5-21t51.5 21l68 68q21 20 21 50t-21 51L314-144Zm131-368L246-314l68 68 199-199-68-67Z" />
  </svg>
);
