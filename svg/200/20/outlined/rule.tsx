import type { SVGProps } from "react";
export const SvgRule = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m567.46-232-22.54-22.54 93-93-93-93 22.54-22.54 93 93 93-93L776-440.54l-93 93 93 93L753.46-232l-93-93-93 93Zm64.77-309.08L524.69-648.62l22.54-22.53 85 85 169-170 23.54 22.53-192.54 192.54ZM136-323.38v-32h296v32H136Zm0-281.24v-32h296v32H136Z" />
  </svg>
);
