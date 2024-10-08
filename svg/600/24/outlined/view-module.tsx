import type { SVGProps } from "react";
export const SvgViewModule = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M627-520h133v-153.22H627V-520Zm-213.43 0h133v-153.22h-133V-520Zm-213 0h133v-153.22h-133V-520Zm0 233.22h133V-440h-133v153.22Zm213 0h133V-440h-133v153.22Zm213.43 0h133V-440H627v153.22Zm-532.44 0v-386.44q0-43.72 31.14-74.86t74.87-31.14H760q43.73 0 74.86 31.14Q866-716.94 866-673.22v386.44q0 43.72-31.14 74.86-31.13 31.14-74.86 31.14H200.57q-43.73 0-74.87-31.14-31.14-31.14-31.14-74.86Z" />
  </svg>
);
