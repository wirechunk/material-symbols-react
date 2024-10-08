import type { SVGProps } from "react";
export const SvgSignpost = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M450-100v-160H250L140-370l110-110h200v-80H180v-220h270v-80h60v80h200l110 110-110 110H510v80h270v220H510v160h-60ZM240-620h445.46l50-50-50-50H240v100Zm34.54 300H720v-100H274.54l-50 50 50 50ZM240-620v-100 100Zm480 300v-100 100Z" />
  </svg>
);
