import type { SVGProps } from "react";
export const SvgHide = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M360-304 205-148q-12 12-28 12t-28-12q-12-12-12-28.5t12-28.5l155-155h-64q-17 0-28.5-11.5T200-400q0-17 11.5-28.5T240-440h160q17 0 28.5 11.5T440-400v160q0 17-11.5 28.5T400-200q-17 0-28.5-11.5T360-240v-64Zm296-296h64q17 0 28.5 11.5T760-560q0 17-11.5 28.5T720-520H560q-17 0-28.5-11.5T520-560v-160q0-17 11.5-28.5T560-760q17 0 28.5 11.5T600-720v64l155-156q12-12 28-12t28 12q12 12 12 28.5T811-755L656-600Z" />
  </svg>
);
