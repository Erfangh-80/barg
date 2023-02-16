type PropsIcon = {
    margin?: string
  }
  
export const ArrowRight = ({margin}: PropsIcon) => {
  return (
    <svg
      width="25"
      height="15"
      viewBox="0 0 39 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ margin: margin,  }}
    >
      <path
        d="M23.488 8.92847L32.9572 17.359L23.488 25.7896"
        stroke="#35BE9D"
        stroke-width="3.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.43713 17.3591H32.6919"
        stroke="#35BE9D"
        stroke-width="3.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
