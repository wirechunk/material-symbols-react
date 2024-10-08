import type { SVGProps } from "react";
export const SvgCarTag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M264-324q20 0 34-14t14-34q0-20-14-34t-34-14q-20 0-34 14t-14 34q0 20 14 34t34 14Zm-96 36v-168 168Zm24 72v72H96v-336l96-240h168v72H241l-48 120h280l72 72H168v168h528v-27l72-72v243h-96v-72H192Zm396-504q14 0 25-10.35T624-756q0-14-11-25t-25.5-11q-14.5 0-25 11T552-755.5q0 14.5 10.35 25T588-720Zm103 309L432-671v-241h240l259 260-240 241Zm0-103 138-138-187-188H504v139l187 187Zm-91 190q16 0 28-9t17-23l-61-61q-14 5-23 17t-9 28q0 20 14 34t34 14Zm67-353Z" />
  </svg>
);
