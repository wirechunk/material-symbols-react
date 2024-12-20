import type { SVGProps } from "react";
export const SvgRepeatOnFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M96.89-34.02q-25.19 0-44.03-18.84T34.02-96.89v-767.22q0-24.43 18.84-43.77 18.84-19.34 44.03-19.34h767.22q24.43 0 43.77 19.34 19.34 19.34 19.34 43.77v767.22q0 25.19-19.34 44.03t-43.77 18.84H96.89Zm181.44-39.76 46.54-48.55-82.89-82.65h524.24v-226.45h-66.46v160H241.98l82.89-82.9-46.54-48.3-164.31 164.3L278.33-73.78Zm-84.31-453.11h66.46v-160h457.78L635.37-604l46.54 48.54L846.22-720 681.91-884.54 635.37-836l82.89 82.65H194.02v226.46Z" />
  </svg>
);
