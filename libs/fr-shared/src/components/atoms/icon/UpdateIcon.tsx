type PropsIcon = {
  margin?: string
}


export const UpdateIcon = ({margin}: PropsIcon) => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 26 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{margin: margin}}
    >
      <path
        d="M21.0048 11.0864L23.0048 9.26585C25.1242 7.34277 26.0795 5.15047 22.781 2.47098C19.4825 -0.195688 16.9899 0.740209 14.8705 2.66329L2.61678 13.8043C2.1541 14.2274 1.70633 15.0607 1.61678 15.6376L1.06454 19.7915C0.870514 21.2915 2.12425 22.3171 3.85559 22.0607L8.66156 21.3556C9.3332 21.253 10.2735 20.83 10.7362 20.3941L16.6317 15.0351"
        stroke="#595959"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.8254 4.52222C13.4672 8.06068 16.8105 10.7658 20.9598 11.1248"
        stroke="#595959"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
