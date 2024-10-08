import type { SVGProps } from "react";
export const SvgSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M197.69-140q-23.59 0-40.64-17.05T140-197.69v-564.62q0-23.59 17.05-40.64T197.69-820h564.62q23.59 0 40.64 17.05T820-762.31v564.62q0 23.59-17.05 40.64T762.31-140H197.69Zm0-45.39h564.62q5.38 0 8.84-3.46t3.46-8.84v-564.62q0-5.38-3.46-8.84t-8.84-3.46H197.69q-5.38 0-8.84 3.46t-3.46 8.84v564.62q0 5.38 3.46 8.84t8.84 3.46Zm-12.3 0v-589.22 589.22Z" />
  </svg>
);
