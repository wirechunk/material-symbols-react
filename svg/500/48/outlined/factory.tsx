import type { SVGProps } from "react";
export const SvgFactory = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M74.5-74.5v-490.09l291-123.78v80.24l200-81.24v123.97h320v490.9h-811Zm68.13-68.13h674.74V-497.1h-318.8v-90.83l-200 80v-79.24l-155.94 68.84v375.7ZM447.37-240h65.26v-160h-65.26v160Zm-162.87 0H350v-160h-65.5v160Zm325.5 0h65.5v-160H610v160Zm275.5-325.5H699.28l40-318.57h105.5L885.5-565.5ZM142.63-142.63h674.74-674.74Z" />
  </svg>
);
