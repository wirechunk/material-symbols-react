import type { SVGProps } from "react";
export const SvgVolcano = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="m59.65-54 171.87-386h119.44l80-200h298.65L897.52-54H59.65ZM172-127h628L675-567H480l-80 200H279L172-127Zm371-653v-153h73v153h-73Zm197.39 78.83-51.04-51.05 108.04-108.04 52.05 51.04-109.05 108.05Zm-321.78 0L310.56-809.22l51.05-52.04 108.61 109.04-51.61 51.05ZM800-127H172h628Z" />
  </svg>
);
