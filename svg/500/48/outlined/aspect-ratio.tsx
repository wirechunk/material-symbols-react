import type { SVGProps } from "react";
export const SvgAspectRatio = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M574.85-276.15h191v-194h-60v134h-131v60Zm-379.7-213.7h60v-134h131v-60h-191v194Zm-53 335.83q-27.6 0-47.86-20.27-20.27-20.26-20.27-47.86v-515.7q0-27.7 20.27-48.03 20.26-20.34 47.86-20.34h675.7q27.7 0 48.03 20.34 20.34 20.33 20.34 48.03v515.7q0 27.6-20.34 47.86-20.33 20.27-48.03 20.27h-675.7Zm0-68.13h675.7v-515.7h-675.7v515.7Zm0 0v-515.7 515.7Z" />
  </svg>
);
