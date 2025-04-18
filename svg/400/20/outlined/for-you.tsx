import type { SVGProps } from "react";
export const SvgForYou = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-480q74 0 146.5-11T768-528v382q-69 27-141.41 38.5T480.09-96Q406-96 333.5-107.5T192-146v-382q69 26 141.5 37T480-480Zm216 282v-234q-54 13-107.5 18.5T480-408q-55 0-108.5-5.5T264-432v234q53 17 107 23.5t109 6.5q55 0 109-6.5T696-198ZM480-864q60 0 102 42t42 102q0 60-42 102t-102 42q-60 0-102-42t-42-102q0-60 42-102t102-42Zm.21 216Q510-648 531-669.21t21-51Q552-750 530.79-771t-51-21Q450-792 429-770.79t-21 51Q408-690 429.21-669t51 21Zm-.21-65Zm0 412Z" />
  </svg>
);
