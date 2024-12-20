import type { SVGProps } from "react";
export const SvgAllOut = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-144v-192h72v120h120v72H144Zm480 0v-72h120v-120h72v192H624Zm-144-96q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm.2-72q69.8 0 118.8-49.2t49-119q0-69.8-49.2-118.8t-119-49Q410-648 361-598.8t-49 119q0 69.8 49.2 118.8t119 49ZM144-624v-192h192v72H216v120h-72Zm600 0v-120H624v-72h192v192h-72ZM480-480Z" />
  </svg>
);
