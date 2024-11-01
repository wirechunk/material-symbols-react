import type { SVGProps } from "react";
export const SvgBox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M218.87-612.76v393.89h522.26v-393.89H628.3v288.48L480-398.43l-148.3 74.15v-288.48H218.87Zm-83 476.89v-579.59l107.48-108.91h473.3l107.48 108.91v579.59H135.87Zm94.5-557.5h499.26l-48-48H278.37l-48 48Zm181.93 80.61v157.61L480-489l67.7 33.85v-157.61H412.3Zm-193.43 0h522.26-522.26Z" />
  </svg>
);
