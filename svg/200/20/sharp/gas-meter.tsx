import type { SVGProps } from "react";
export const SvgGasMeter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M232-136v-615h148v-73h32v73h136v-73h32v73h148v615H232Zm32-32h432v-551H264v551Zm92-428h248v-32H356v32Zm124.37 305.08q28.4 0 51.25-21.86 22.84-21.86 22.84-52.23 0-23.45-15.91-43.44-15.9-19.99-58.55-68.63-42.15 48.62-58.31 68.28-16.15 19.66-16.15 43.55 0 30.62 23.21 52.47 23.22 21.86 51.62 21.86ZM264-168v-551 551Z" />
  </svg>
);
