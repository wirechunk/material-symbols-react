import type { SVGProps } from "react";
export const SvgSpeaker = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M768-96H192v-768h576v768Zm-72-72v-624H264v624h432ZM480.21-600Q510-600 531-621.21t21-51Q552-702 530.79-723t-51-21Q450-744 429-722.79t-21 51Q408-642 429.21-621t51 21ZM480-216q70 0 119-49t49-119q0-70-49-119t-119-49q-70 0-119 49t-49 119q0 70 49 119t119 49Zm0-72q-39.6 0-67.8-28.2Q384-344.4 384-384q0-39.6 28.2-67.8Q440.4-480 480-480q39.6 0 67.8 28.2Q576-423.6 576-384q0 39.6-28.2 67.8Q519.6-288 480-288ZM264-792v624-624Z" />
  </svg>
);
