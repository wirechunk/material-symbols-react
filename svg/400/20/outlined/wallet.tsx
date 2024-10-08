import type { SVGProps } from "react";
export const SvgWallet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M240-192q-60 0-102-42T96-336v-288q0-60 42-102t102-42h480q60 0 102 42t42 102v288q0 60-42 102t-102 42H240Zm0-432h480q19 0 37 5.5t35 14.5v-20q0-30-21-51t-51-21H240q-30 0-51 21t-21 51v20q17-10 35-15t37-5Zm-63 110 430 105q8 2 16 0t15-7l135-112q-11-11-24.5-17.5T720-552H240q-20 0-38 11t-25 27Z" />
  </svg>
);
