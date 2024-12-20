import type { SVGProps } from "react";
export const SvgDisabledByDefault = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M218.87-218.87h522.26v-522.26H218.87v522.26Zm-83 83v-688.26h688.26v688.26H135.87ZM350-296.37l130.19-130.19 130.18 130.19 53.26-53.26-130.19-130.18L663.63-610 610-663.63 479.81-533.44 349.63-663.63l-53.26 53.26 130.19 130.18L296.37-350 350-296.37Zm-131.13 77.5v-522.26 522.26Z" />
  </svg>
);
