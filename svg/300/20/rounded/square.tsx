import type { SVGProps } from "react";
export const SvgSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M228.31-164q-26.62 0-45.47-18.84Q164-201.69 164-228.31v-503.38q0-26.62 18.84-45.47Q201.69-796 228.31-796h503.38q26.62 0 45.47 18.84Q796-758.31 796-731.69v503.38q0 26.62-18.84 45.47Q758.31-164 731.69-164H228.31Zm0-52h503.38q5.39 0 8.85-3.46t3.46-8.85v-503.38q0-5.39-3.46-8.85t-8.85-3.46H228.31q-5.39 0-8.85 3.46t-3.46 8.85v503.38q0 5.39 3.46 8.85t8.85 3.46ZM216-216v-528 528Z" />
  </svg>
);
