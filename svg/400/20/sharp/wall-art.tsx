import type { SVGProps } from "react";
export const SvgWallArt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-96v-576h192l192-192 192 192h192v576H96Zm72-72h624v-432H168v432Zm96-72h432L552-432 444-288l-72-96-108 144Zm420-192q25 0 42.5-17.5T744-492q0-25-17.5-42.5T684-552q-25 0-42.5 17.5T624-492q0 25 17.5 42.5T684-432ZM356-672h248L480-796 356-672ZM168-168v-432 432Z" />
  </svg>
);
