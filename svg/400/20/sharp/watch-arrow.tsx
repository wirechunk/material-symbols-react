import type { SVGProps } from "react";
export const SvgWatchArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m480-360-51-51 33-33H360v-72h102l-33-33 51-51 120 120-120 120Zm-39-432h78-78Zm0 624h78-78Zm-57 72-48-192q-44-33-70-82.5T240-480q0-60 26.5-109.5T338-672l46-192h192l46 192q45 33 71.5 82.5T720-480q0 60-26 109.5T624-288L576-96H384Zm96-216q70 0 119-49t49-119q0-70-49-119t-119-49q-70 0-119 49t-49 119q0 70 49 119t119 49Zm-59-400q14-4 29-6t30-2q15 0 29.5 2t28.5 6l-19-80h-78l-20 80Zm20 544h78l21-80q-14 4-29 6t-31 2q-16 0-30.5-2t-28.5-6l20 80Z" />
  </svg>
);
