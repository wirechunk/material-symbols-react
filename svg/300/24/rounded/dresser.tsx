import type { SVGProps } from "react";
export const SvgDresser = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M180-130v-617.69q0-29.83 21.24-51.07Q222.48-820 252.31-820h455.38q29.83 0 51.07 21.24Q780-777.52 780-747.69V-130h-60v-84.62H240V-130h-60Zm60-375.38h210V-760H252.31q-5.39 0-8.85 3.46t-3.46 8.85v242.31Zm270-157.31h210v-85q0-5.39-3.46-8.85t-8.85-3.46H510v97.31Zm0 157.31h210v-97.31H510v97.31ZM410-330h140v-60H410v60ZM240-445.39v170.78h480v-170.78H240Zm0 0v170.78-170.78Z" />
  </svg>
);
