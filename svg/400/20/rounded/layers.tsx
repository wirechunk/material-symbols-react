import type { SVGProps } from "react";
export const SvgLayers = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M180-380q-14-11-14-28t14.5-28q9.97-8 21.75-8t21.75 8l256 200 256-201q10-8 22-7.5t21.78 8.1Q794-425 794-408t-14 28L524-179q-19.68 16-43.84 16Q456-163 436-179L180-380Zm256 9L216-543q-28-21.65-28-56.82Q188-635 216-657l220-172q19.68-16 43.84-16Q504-845 524-829l220 172q28 21.65 28 56.82Q772-565 744-543L524-371q-19.68 16-43.84 16Q456-355 436-371Zm44-57 219-172-219-172-219 172 219 172Zm0-172Z" />
  </svg>
);
