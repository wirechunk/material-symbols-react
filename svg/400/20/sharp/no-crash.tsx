import type { SVGProps } from "react";
export const SvgNoCrash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M451-667 349-769l51-51 51 51 119-119 51 51-170 170ZM144-24v-336l96-240h480l96 240v336h-96v-72H240v72h-96Zm97-384h478l-48-120H289l-48 120Zm-25 72v168-168Zm96 132q20 0 34-14t14-34q0-20-14-34t-34-14q-20 0-34 14t-14 34q0 20 14 34t34 14Zm336 0q20 0 34-14t14-34q0-20-14-34t-34-14q-20 0-34 14t-14 34q0 20 14 34t34 14Zm-432 36h528v-168H216v168Z" />
  </svg>
);
