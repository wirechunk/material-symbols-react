import type { SVGProps } from "react";
export const SvgSafetyCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480.23-288Q560-288 616-344.23q56-56.22 56-136Q672-560 615.77-616q-56.22-56-136-56Q400-672 344-615.77q-56 56.22-56 136Q288-400 344.23-344q56.22 56 136 56ZM535-391l-79-79v-106h48v86l65 65-34 34ZM480-96q-135-33-223.5-152.84Q168-368.69 168-515v-229l312-120 312 120v229q0 146.31-88.5 266.16Q615-129 480-96Zm0-75q104-32.25 172-129t68-215v-180l-240-92-240 92v180q0 118.25 68 215t172 129Zm0-308Z" />
  </svg>
);
