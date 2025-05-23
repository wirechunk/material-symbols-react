import type { SVGProps } from "react";
export const SvgTable = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M228.31-164Q198-164 181-181q-17-17-17-47.31v-503.38Q164-762 181-779q17-17 47.31-17h503.38Q762-796 779-779q17 17 17 47.31v503.38Q796-198 779-181q-17 17-47.31 17H228.31ZM454-383.92H216v155.61q0 5.39 3.46 8.85t8.85 3.46H454v-167.92Zm52 0V-216h225.69q5.39 0 8.85-3.46t3.46-8.85v-155.61H506Zm-52-52v-168.7H216v168.7h238Zm52 0h238v-168.7H506v168.7ZM216-656.61h528v-75.08q0-5.39-3.46-8.85t-8.85-3.46H228.31q-5.39 0-8.85 3.46t-3.46 8.85v75.08Z" />
  </svg>
);
