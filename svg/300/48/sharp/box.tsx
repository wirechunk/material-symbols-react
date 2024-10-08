import type { SVGProps } from "react";
export const SvgBox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M185.39-668.61v483.22h589.22v-483.22H620V-357l-140-70-140 70v-311.61H185.39ZM140-140v-566.31L227-820h505l88 114.46V-140H140Zm61.62-574H757l-48.69-60.61H250.69L201.62-714Zm183.77 45.39v238.07L480-477.85l94.61 47.31v-238.07H385.39Zm-200 0h589.22-589.22Z" />
  </svg>
);
