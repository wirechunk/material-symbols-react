import type { SVGProps } from "react";
export const SvgRectangle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M157.69-180q-23.59 0-40.64-17.05T100-237.69v-484.62q0-23.59 17.05-40.64T157.69-780h644.62q23.59 0 40.64 17.05T860-722.31v484.62q0 23.59-17.05 40.64T802.31-180H157.69Zm0-45.39h644.62q5.38 0 8.84-3.46t3.46-8.84v-484.62q0-5.38-3.46-8.84t-8.84-3.46H157.69q-5.38 0-8.84 3.46t-3.46 8.84v484.62q0 5.38 3.46 8.84t8.84 3.46Zm-12.3 0V-734.61-225.39Z" />
  </svg>
);
