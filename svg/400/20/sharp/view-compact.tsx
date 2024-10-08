import type { SVGProps } from "react";
export const SvgViewCompact = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-192v-576h768v576H96Zm72-408h102v-96H168v96Zm174 0h102v-96H342v96Zm174 0h102v-96H516v96Zm174 0h102v-96H690v96Zm0 168h102v-96H690v96Zm-174 0h102v-96H516v96Zm-174 0h102v-96H342v96Zm-72-96H168v96h102v-96Zm420 264h102v-96H690v96Zm-174 0h102v-96H516v96Zm-174 0h102v-96H342v96Zm-174 0h102v-96H168v96Z" />
  </svg>
);
