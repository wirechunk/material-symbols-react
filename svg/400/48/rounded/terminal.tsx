import type { SVGProps } from "react";
export const SvgTerminal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm0-60h680v-436H140v436Zm221-218-83-83q-9-9-8.5-21t9.5-21q9-9 21-9t21 9l104 104q9 9 9 21t-9 21L321-313q-9 9-21 9t-21-9q-9-9-9-21t9-21l82-83Zm159 150q-13 0-21.5-8.5T490-318q0-13 8.5-21.5T520-348h160q13 0 21.5 8.5T710-318q0 13-8.5 21.5T680-288H520Z" />
  </svg>
);
