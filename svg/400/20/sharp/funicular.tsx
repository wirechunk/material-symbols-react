import type { SVGProps } from "react";
export const SvgFunicular = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M48-48v-72l202-56v-112H144v-432h-40v-72h136v-72h480v72h136v72h-40v336H710v80l202-56v72L48-48Zm317-160 230-64v-112h-67v96H365v80ZM216-360h228v-48H216v48Zm300-96h228v-48H516v48Zm-300-24h228v-216H216v216Zm300-96h228v-120H516v120Zm-72 216v-48 48Zm72-96v-48 48Z" />
  </svg>
);
