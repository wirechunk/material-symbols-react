import type { SVGProps } from "react";
export const SvgPhotoAlbum = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M192-96v-768h576v768H192Zm72-72h432v-624h-72v312l-96-48-96 48v-312H264v624Zm24-72h384L546-408l-90 120-66-88-102 136Zm-24 72v-624 624Zm168-312 96-48 96 48-96-48-96 48Z" />
  </svg>
);
