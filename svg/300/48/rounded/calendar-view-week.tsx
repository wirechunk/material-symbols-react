import type { SVGProps } from "react";
export const SvgCalendarViewWeek = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M157.69-180q-23.53 0-40.61-17.08T100-237.69v-484.62q0-23.53 17.08-40.61T157.69-780h644.62q23.53 0 40.61 17.08T860-722.31v484.62q0 23.53-17.08 40.61T802.31-180H157.69Zm347.85-45.39h131.84v-509.22H505.54v509.22Zm-182.31 0h131.85v-509.22H323.23v509.22Zm-165.54 0h120.16v-509.22H157.69q-5.38 0-8.84 3.46t-3.46 8.84v484.62q0 5.38 3.46 8.84t8.84 3.46Zm525.08 0h119.54q5.38 0 8.84-3.46t3.46-8.84v-484.62q0-5.38-3.46-8.84t-8.84-3.46H682.77v509.22Z" />
  </svg>
);
