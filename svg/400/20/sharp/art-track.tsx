import type { SVGProps } from "react";
export const SvgArtTrack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M624-192H48v-576h576v576Zm-504-72h432v-432H120v432Zm576 72v-576h72v576h-72Zm144 0v-576h72v576h-72ZM168-336h336L395-480l-83 108-59-78-85 114Zm-48-360v432-432Z" />
  </svg>
);
