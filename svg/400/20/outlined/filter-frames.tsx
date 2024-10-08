import type { SVGProps } from "react";
export const SvgFilterFrames = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M168-96q-29.7 0-50.85-21.15Q96-138.3 96-168v-528q0-29.7 21.15-50.85Q138.3-768 168-768h168l144-144 144 144h168q29.7 0 50.85 21.15Q864-725.7 864-696v528q0 29.7-21.15 50.85Q821.7-96 792-96H168Zm0-72h624v-528H168v528Zm72-72v-384h480v384H240Zm72-72h336v-240H312v240Zm168-120Z" />
  </svg>
);
