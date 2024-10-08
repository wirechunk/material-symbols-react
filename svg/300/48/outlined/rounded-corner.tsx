import type { SVGProps } from "react";
export const SvgRoundedCorner = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M140-140v-50h50v50h-50Zm0-157.69v-50h50v50h-50ZM140-455v-50h50v50h-50Zm0-157.69v-50h50v50h-50ZM140-770v-50h50v50h-50Zm157.69 630v-50h50v50h-50Zm0-630v-50h50v50h-50ZM455-140v-50h50v50h-50Zm157.69 0v-50h50v50h-50ZM770-140v-50h50v50h-50Zm0-157.69v-50h50v50h-50ZM820-455h-45.39v-182.69q0-57.26-39.83-97.09-39.83-39.83-97.09-39.83H455V-820h182.5q76.1 0 129.3 53.2Q820-713.6 820-637.5V-455Z" />
  </svg>
);
