import type { SVGProps } from "react";
export const SvgOutput = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-120v-720h720v150h-60v-90H180v600h600v-90h60v150H120Zm574-174-42-42 113-114H360v-60h405L652-624l42-42 186 186-186 186Z" />
  </svg>
);
