import type { SVGProps } from "react";
export const SvgWrapText = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M570-192 432-330l138-138 51 51-52 51h103q29.83 0 50.91-21.12 21.09-21.12 21.09-51T722.91-489q-21.08-21-50.91-21H192v-72h480q60.48 0 102.24 41.76T816-438q0 60.48-41.76 102.24T672-294H570l51 51-51 51ZM192-294v-72h192v72H192Zm0-432v-72h576v72H192Z" />
  </svg>
);
