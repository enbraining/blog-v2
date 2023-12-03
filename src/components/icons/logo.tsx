export const Logo = ({
  width = 35,
  height = 35,
}: {
  width?: number;
  height?: number;
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="25" cy="25" r="25" fill="url(#paint0_linear_1055_5)" />
    <defs>
      <linearGradient
        id="paint0_linear_1055_5"
        x1="25"
        y1="0"
        x2="25"
        y2="50"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#0066FF" />
        <stop offset="1" stop-color="#7BFFB8" />
      </linearGradient>
    </defs>
  </svg>
);
