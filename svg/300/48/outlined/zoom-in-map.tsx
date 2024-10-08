import type { SVGProps } from "react";
export const SvgZoomInMap = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="m156.46-123.85-32.61-32.61 150.84-150.85H140v-45.38h212.69V-140h-45.38v-134.69L156.46-123.85Zm647.08 0L652.69-274.69V-140h-45.38v-212.69H820v45.38H685.31l150.84 150.85-32.61 32.61ZM140-607.31v-45.38h134.69L123.85-803.54l32.61-32.61 150.85 150.84V-820h45.38v212.69H140Zm467.31 0V-820h45.38v134.69l151.46-151.46 32.62 32.62-151.46 151.46H820v45.38H607.31Z" />
  </svg>
);
