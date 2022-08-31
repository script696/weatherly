interface ILocation {
  pathname: string | undefined;
  search: string | undefined;
  hash: string | undefined;
  state: unknown;
  key?: string | undefined;
}

const GlobalSvgSelector = ({ id }: any) => {
  switch (id) {
    case "location":
      return (
        <svg
          width="14"
          height="16"
          viewBox="0 0 14 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 6.65421C0 2.97432 3.07511 0 6.79476 0C10.5249 0 13.6 2.97432 13.6 6.65421C13.6 8.50856 12.9256 10.2301 11.8156 11.6893C10.5911 13.2988 9.08174 14.7012 7.38284 15.802C6.99402 16.0564 6.64311 16.0756 6.21637 15.802C4.50779 14.7012 2.99847 13.2988 1.7844 11.6893C0.673588 10.2301 0 8.50856 0 6.65421ZM4.55543 6.86141C4.55543 8.09417 5.56138 9.06375 6.79481 9.06375C8.02905 9.06375 9.04467 8.09417 9.04467 6.86141C9.04467 5.63824 8.02905 4.62147 6.79481 4.62147C5.56138 4.62147 4.55543 5.63824 4.55543 6.86141Z"
            fill="white"
          />
        </svg>
      );
    case "menuBtnCircle":
      return (
        <svg
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="17.5"
            cy="17.5"
            r="16.8"
            stroke="white"
            strokeOpacity="0.59"
            strokeWidth="1.4"
          />
          <circle cx="13.1249" cy="13.125" r="2.43056" fill="#FCFFFF" />
          <circle cx="13.1249" cy="21.875" r="2.43056" fill="#FCFFFF" />
          <circle cx="21.8749" cy="13.125" r="2.43056" fill="#FCFFFF" />
          <circle cx="21.8749" cy="21.875" r="2.43056" fill="#FCFFFF" />
        </svg>
      );
    case "menuBtnBlank":
      return (
        <svg
          width="5"
          height="21"
          viewBox="0 0 5 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.50956 18.5021L2.50939 18.5111"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.6641 10.5036L2.66393 10.5126"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.81889 2.50506L2.81871 2.51406"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "calendar":
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.31958 7.05319H15.6875"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.3315 9.98226H12.3384"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.00335 9.98226H9.0103"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.66839 9.98226H5.67534"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.3315 12.8972H12.3384"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.00335 12.8972H9.0103"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.66839 12.8972H5.67534"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.0327 1.5V3.96809"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.97411 1.5V3.96809"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.1787 2.68439H5.82822C3.6257 2.68439 2.25 3.91134 2.25 6.16666V12.9539C2.25 15.2447 3.6257 16.5 5.82822 16.5H12.1718C14.3812 16.5 15.75 15.2659 15.75 13.0106V6.16666C15.7569 3.91134 14.3882 2.68439 12.1787 2.68439Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "windy":
      return (
        <svg
          width="26"
          height="26"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 30C11.6744 29.9984 10.4036 29.4711 9.46622 28.5338C8.52888 27.5964 8.00159 26.3256 8 25H10C10 25.5933 10.1759 26.1734 10.5056 26.6667C10.8352 27.1601 11.3038 27.5446 11.8519 27.7716C12.4001 27.9987 13.0033 28.0581 13.5853 27.9424C14.1672 27.8266 14.7018 27.5409 15.1213 27.1213C15.5409 26.7018 15.8266 26.1672 15.9424 25.5853C16.0581 25.0033 15.9987 24.4001 15.7716 23.8519C15.5446 23.3038 15.1601 22.8352 14.6667 22.5056C14.1734 22.1759 13.5933 22 13 22H4V20H13C14.3261 20 15.5979 20.5268 16.5355 21.4645C17.4732 22.4021 18 23.6739 18 25C18 26.3261 17.4732 27.5979 16.5355 28.5355C15.5979 29.4732 14.3261 30 13 30Z"
            fill="#73CAFC"
          />
          <path
            d="M25 25C23.6744 24.9984 22.4036 24.4711 21.4662 23.5338C20.5289 22.5964 20.0016 21.3256 20 20H22C22 20.5933 22.1759 21.1734 22.5056 21.6667C22.8352 22.1601 23.3038 22.5446 23.8519 22.7716C24.4001 22.9987 25.0033 23.0581 25.5853 22.9424C26.1672 22.8266 26.7018 22.5409 27.1213 22.1213C27.5409 21.7018 27.8266 21.1672 27.9424 20.5853C28.0581 20.0033 27.9987 19.4001 27.7716 18.8519C27.5446 18.3038 27.1601 17.8352 26.6667 17.5056C26.1734 17.1759 25.5933 17 25 17H2V15H25C26.3261 15 27.5979 15.5268 28.5355 16.4645C29.4732 17.4021 30 18.6739 30 20C30 21.3261 29.4732 22.5979 28.5355 23.5355C27.5979 24.4732 26.3261 25 25 25ZM21 12H6V10H21C21.5933 10 22.1734 9.82405 22.6667 9.49441C23.1601 9.16476 23.5446 8.69623 23.7716 8.14805C23.9987 7.59987 24.0581 6.99667 23.9424 6.41473C23.8266 5.83279 23.5409 5.29824 23.1213 4.87868C22.7018 4.45912 22.1672 4.1734 21.5853 4.05764C21.0033 3.94189 20.4001 4.0013 19.8519 4.22836C19.3038 4.45542 18.8352 4.83994 18.5056 5.33329C18.1759 5.82664 18 6.40666 18 7H16C16 6.01109 16.2932 5.04439 16.8427 4.22215C17.3921 3.3999 18.173 2.75904 19.0866 2.3806C20.0002 2.00216 21.0055 1.90315 21.9755 2.09607C22.9454 2.289 23.8363 2.7652 24.5355 3.46447C25.2348 4.16373 25.711 5.05464 25.9039 6.02455C26.0969 6.99445 25.9978 7.99979 25.6194 8.91342C25.241 9.82705 24.6001 10.6079 23.7779 11.1573C22.9556 11.7068 21.9889 12 21 12Z"
            fill="#73CAFC"
          />
        </svg>
      );
    case "humidity":
      return (
        <svg
          width="12"
          height="19"
          viewBox="0 0 12 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.99488 0C6.38136 1.74414 6.82494 3.13729 7.31829 4.17171C7.81164 5.20614 8.56704 6.32715 9.58009 7.5363L10.0163 8.04964C11.3398 9.60514 12 11.1653 12 12.7208C12 14.4433 11.4115 15.9199 10.233 17.1507C9.05014 18.3815 7.64036 19 5.9978 19C4.35964 19 2.95279 18.3815 1.76992 17.1507C0.589972 15.9199 0 14.4433 0 12.7208C0 11.1653 0.660242 9.60514 1.98365 8.04964L2.41991 7.5363C3.4315 6.32715 4.1869 5.20614 4.68171 4.17171C5.1736 3.13729 5.61425 1.74414 5.99488 0ZM2.02172 11.7961C1.99097 11.4436 2.23838 11.1313 2.57216 11.0988C2.90741 11.0663 3.20312 11.3276 3.2324 11.6802C3.30853 12.5337 3.48567 13.3207 3.82384 13.9995C4.1503 14.6551 4.63633 15.2195 5.33903 15.654C5.62889 15.8333 5.72551 16.2276 5.55569 16.5322C5.38587 16.8384 5.01257 16.9404 4.72417 16.7611C3.8092 16.1952 3.17531 15.4591 2.74637 14.5979C2.32914 13.7598 2.11248 12.812 2.02172 11.7961Z"
            fill="#C7DEFC"
          />
        </svg>
      );
    case "direction":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4H16.98C17.3429 4.00011 17.699 4.09898 18.01 4.286L20.863 6C21.2082 6.20734 21.4939 6.50051 21.6922 6.85098C21.8906 7.20146 21.9948 7.5973 21.9948 8C21.9948 8.4027 21.8906 8.79854 21.6922 9.14902C21.4939 9.49949 21.2082 9.79266 20.863 10L18.01 11.714C17.699 11.901 17.3429 11.9999 16.98 12H12V21C12 21.2652 11.8946 21.5196 11.7071 21.7071C11.5196 21.8946 11.2652 22 11 22C10.7348 22 10.4804 21.8946 10.2929 21.7071C10.1054 21.5196 10 21.2652 10 21V12H4C3.46957 12 2.96086 11.7893 2.58579 11.4142C2.21071 11.0391 2 10.5304 2 10V6C2 5.46957 2.21071 4.96086 2.58579 4.58579C2.96086 4.21071 3.46957 4 4 4H10V3C10 2.73478 10.1054 2.48043 10.2929 2.29289C10.4804 2.10536 10.7348 2 11 2C11.2652 2 11.5196 2.10536 11.7071 2.29289C11.8946 2.48043 12 2.73478 12 3V4Z"
            fill="#C7DEFC"
          />
        </svg>
      );
    case "arrowRight":
      return (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 15 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.536 19.886C0.697765 19.9701 0.879391 20.0086 1.06138 19.9974C1.24337 19.9861 1.41886 19.9255 1.569 19.822L14.569 10.822C14.7018 10.73 14.8104 10.6071 14.8854 10.464C14.9603 10.3208 14.9995 10.1616 14.9995 10C14.9995 9.8384 14.9603 9.6792 14.8854 9.53604C14.8104 9.39289 14.7018 9.27003 14.569 9.178L1.569 0.178C1.41897 0.0741925 1.24341 0.0134049 1.06131 0.00221889C0.879219 -0.0089671 0.697533 0.0298749 0.53593 0.114539C0.374326 0.199203 0.238963 0.326463 0.144497 0.48254C0.0500308 0.638616 6.15833e-05 0.817562 1.35831e-08 1V19C-3.00674e-05 19.1825 0.0499031 19.3616 0.144387 19.5178C0.238871 19.674 0.374302 19.8013 0.536 19.886Z"
            fill="#fff"
          />
        </svg>
      );
    case "arrowLeft":
      return (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 15 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.431052 10.822L13.4311 19.822C13.5811 19.9258 13.7566 19.9866 13.9387 19.9978C14.1208 20.009 14.3025 19.9701 14.4641 19.8855C14.6257 19.8008 14.7611 19.6735 14.8556 19.5175C14.95 19.3614 15 19.1824 15.0001 19V0.999999C15.0002 0.817476 14.9503 0.638401 14.8559 0.482181C14.7616 0.325961 14.6262 0.198555 14.4646 0.11377C14.3029 0.028986 14.1212 -0.00994296 13.939 0.00120271C13.7568 0.0123484 13.5811 0.0731435 13.4311 0.176999L0.431052 9.177C0.298611 9.26943 0.190449 9.39248 0.115763 9.53568C0.0410766 9.67888 0.0020752 9.83799 0.0020752 9.9995C0.0020752 10.161 0.0410766 10.3201 0.115763 10.4633C0.190449 10.6065 0.298611 10.7296 0.431052 10.822V10.822Z"
            fill="#fff"
          />
        </svg>
      );
    default:
      return null;
  }
};

export default GlobalSvgSelector;