import type { SVGProps } from "react";
export const SvgRipples = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M200-200h560v-353.54q-18 11.39-38.31 17.46Q701.38-530 680-530q-62.15 0-106.08-43.92Q530-617.85 530-680q0-21.38 6.08-41.69Q542.15-742 553.54-760H200v560Zm-60 60v-680h680v680H140Zm60-620v560-560Z" />
  </svg>
);
