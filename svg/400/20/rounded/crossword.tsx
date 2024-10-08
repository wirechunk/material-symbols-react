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
    <path d="M396-324v168h168v-168H396Zm-72-72v-168H156v168h168Zm72 0h168v-168H396v168Zm240 0h168v-168H636v168Zm0-240h168v-168H636v168ZM324-324H156q-29.7 0-50.85-21.15Q84-366.3 84-396v-168q0-29.7 21.15-50.85Q126.3-636 156-636h408v-168q0-29.7 21.15-50.85Q606.3-876 636-876h168q29.7 0 50.85 21.15Q876-833.7 876-804v408q0 29.7-21.15 50.85Q833.7-324 804-324H636v168q0 29.7-21.15 50.85Q593.7-84 564-84H396q-29.7 0-50.85-21.15Q324-126.3 324-156v-168Z" />
  </svg>
);
