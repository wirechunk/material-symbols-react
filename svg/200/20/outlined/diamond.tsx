import type { SVGProps } from "react";
export const SvgDiamond = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-175.54 119.85-579.08 204.31-796h551.38l84.46 216.92L480-175.54ZM361.69-592h236.62l-86-172h-64.62l-86 172ZM464-237.62V-560H181.69L464-237.62Zm32 0L778.31-560H496v322.38ZM633.69-592h170.62l-72-172H547.69l86 172Zm-478 0h170.62l86-172H228.69l-73 172Z" />
  </svg>
);
