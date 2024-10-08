import type { SVGProps } from "react";
export const SvgBento = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-240v-480h768v480H96Zm456-276h240v-132H552v132ZM168-312h312v-336H168v336Zm156-120q-20 0-34-14t-14-34q0-20 14-34t34-14q20 0 34 14t14 34q0 20-14 34t-34 14Zm228 120h240v-132H552v132Z" />
  </svg>
);
