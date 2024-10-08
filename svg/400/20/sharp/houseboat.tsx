import type { SVGProps } from "react";
export const SvgHouseboat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-192v-72q34-2 53.5-25t74.5-23q57 0 76.5 24t51.5 24q35 0 51.5-24t76.5-24q60 0 77 24t52 24q34 0 51-24t77-24q56 0 74 23t53 25v72q-57 0-76.5-24T736-240q-34 0-51.5 24T608-192q-60 0-76.5-24T480-240q-36 0-52 24t-76 24q-59 0-76-24t-52-24q-32 0-52 24t-76 24Zm10-254 50-51 65 65h67v-140l-53 40-43-58 288-212 288 212-43 58-53-40v140h66l66-65 51 51-86 86H192l-86-86Zm254 14h84v-96h72v96h84v-192l-120-89-120 88v193Zm0 0h240-240Z" />
  </svg>
);
