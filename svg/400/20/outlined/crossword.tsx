import type { SVGProps } from "react";
export const SvgCrossword = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M396-156h168v-168H396v168ZM156-396h168v-168H156v168Zm240 0h168v-168H396v168Zm240 0h168v-168H636v168Zm0-240h168v-168H636v168ZM324-84v-240H84v-312h480v-240h312v552H636v240H324Z" />
  </svg>
);
