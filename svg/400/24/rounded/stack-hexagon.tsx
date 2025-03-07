import type { SVGProps } from "react";
export const SvgStackHexagon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="m600-431 100-57q9-5 14.5-14.5T720-523v-114q0-11-5.5-20.5T700-672l-100-57q-9-5-20-5t-20 5l-100 57q-9 5-14.5 14.5T440-637v114q0 11 5.5 20.5T460-488l100 57q9 5 20 5t20-5ZM360-280q-33 0-56.5-23.5T280-360v-440q0-33 23.5-56.5T360-880h440q33 0 56.5 23.5T880-800v440q0 33-23.5 56.5T800-280H360Zm0-80h440v-440H360v440Zm220-220ZM218-164Zm10 79q-33 4-59.5-16T138-154L85-591q-4-33 17-59t54-31h2q17-3 30.5 9t13.5 30q0 15-10.5 26T166-602h-1l54 438 474-58q17-2 30 8t15 27q2 17-8 29.5T703-143L228-85Zm352-427-60-34v-68l60-34 60 34v68l-60 34Z" />
  </svg>
);
