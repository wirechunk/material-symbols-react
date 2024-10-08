import type { SVGProps } from "react";
export const SvgTexture = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M201.15-164q-14.38-4.62-23.46-13.69-9.07-9.08-13.69-23.46L758.85-796q12.61 5.23 22.26 14.69 9.66 9.46 14.5 22.46L201.15-164ZM164-404.46v-74.31L481.23-796h74.31L164-404.46Zm0-287.62v-39.61q0-27.31 18.5-45.81Q201-796 228.31-796h39.61L164-692.08ZM682.08-164 796-277.92v49.61q0 27.31-18.5 45.81Q759-164 731.69-164h-49.61Zm-277.62 0L796-555.54v74.31L478.77-164h-74.31Z" />
  </svg>
);
