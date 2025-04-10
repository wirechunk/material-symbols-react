import type { SVGProps } from "react";
export const Svg3D = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M520-600v240h160l40-40v-160l-40-40H520Zm60 180v-120h80v120h-80Zm-320 60h160l20-20v-80l-20-20 20-20v-80l-20-20H260v60h120v30h-80v60h80v30H260v60ZM80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm0 0v-480 480Z" />
  </svg>
);
