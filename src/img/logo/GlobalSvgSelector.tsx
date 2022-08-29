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
    case "clearSky":
      return (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 156 156"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M78 0.857147C79.2787 0.857147 80.5051 1.36512 81.4093 2.26931C82.3134 3.1735 82.8214 4.39985 82.8214 5.67858V15.2957C82.8214 16.5744 82.3134 17.8008 81.4093 18.705C80.5051 19.6092 79.2787 20.1171 78 20.1171C76.7213 20.1171 75.4949 19.6092 74.5907 18.705C73.6865 17.8008 73.1786 16.5744 73.1786 15.2957V5.67858C73.1786 4.39985 73.6865 3.1735 74.5907 2.26931C75.4949 1.36512 76.7213 0.857147 78 0.857147V0.857147ZM116.571 78C116.571 83.0653 115.574 88.081 113.635 92.7607C111.697 97.4404 108.856 101.692 105.274 105.274C101.692 108.856 97.4403 111.697 92.7606 113.635C88.0809 115.574 83.0653 116.571 78 116.571C72.9347 116.571 67.9191 115.574 63.2394 113.635C58.5597 111.697 54.3076 108.856 50.7259 105.274C47.1442 101.692 44.303 97.4404 42.3646 92.7607C40.4263 88.081 39.4286 83.0653 39.4286 78C39.4286 67.7702 43.4923 57.9594 50.7259 50.7259C57.9594 43.4923 67.7702 39.4286 78 39.4286C88.2298 39.4286 98.0406 43.4923 105.274 50.7259C112.508 57.9594 116.571 67.7702 116.571 78V78ZM150.321 82.8214C151.6 82.8214 152.827 82.3135 153.731 81.4093C154.635 80.5051 155.143 79.2787 155.143 78C155.143 76.7213 154.635 75.4949 153.731 74.5907C152.827 73.6866 151.6 73.1786 150.321 73.1786H140.704C139.426 73.1786 138.199 73.6866 137.295 74.5907C136.391 75.4949 135.883 76.7213 135.883 78C135.883 79.2787 136.391 80.5051 137.295 81.4093C138.199 82.3135 139.426 82.8214 140.704 82.8214H150.321ZM78 135.883C79.2787 135.883 80.5051 136.391 81.4093 137.295C82.3134 138.199 82.8214 139.426 82.8214 140.704V150.321C82.8214 151.6 82.3134 152.827 81.4093 153.731C80.5051 154.635 79.2787 155.143 78 155.143C76.7213 155.143 75.4949 154.635 74.5907 153.731C73.6865 152.827 73.1786 151.6 73.1786 150.321V140.704C73.1786 139.426 73.6865 138.199 74.5907 137.295C75.4949 136.391 76.7213 135.883 78 135.883V135.883ZM15.3214 82.8214C16.6001 82.8214 17.8265 82.3135 18.7307 81.4093C19.6349 80.5051 20.1429 79.2787 20.1429 78C20.1429 76.7213 19.6349 75.4949 18.7307 74.5907C17.8265 73.6866 16.6001 73.1786 15.3214 73.1786H5.685C4.40628 73.1786 3.17993 73.6866 2.27573 74.5907C1.37154 75.4949 0.86357 76.7213 0.86357 78C0.86357 79.2787 1.37154 80.5051 2.27573 81.4093C3.17993 82.3135 4.40628 82.8214 5.685 82.8214H15.3279H15.3214ZM21.5571 21.5507C22.4612 20.6478 23.6866 20.1407 24.9643 20.1407C26.242 20.1407 27.4674 20.6478 28.3714 21.5507L38.0143 31.1936C38.8659 32.1076 39.3296 33.3164 39.3076 34.5655C39.2855 35.8146 38.7795 37.0063 37.8961 37.8897C37.0128 38.7731 35.821 39.2791 34.5719 39.3011C33.3229 39.3232 32.114 38.8595 31.2 38.0079L21.5571 28.365C20.6542 27.461 20.1471 26.2355 20.1471 24.9579C20.1471 23.6802 20.6542 22.4547 21.5571 21.5507V21.5507ZM28.3714 134.436C27.4574 135.288 26.2486 135.752 24.9995 135.73C23.7504 135.708 22.5587 135.202 21.6753 134.318C20.7919 133.435 20.2859 132.243 20.2639 130.994C20.2418 129.745 20.7055 128.536 21.5571 127.622L31.2 117.979C32.114 117.128 33.3229 116.664 34.5719 116.686C35.821 116.708 37.0128 117.214 37.8961 118.097C38.7795 118.981 39.2855 120.173 39.3076 121.422C39.3296 122.671 38.8659 123.88 38.0143 124.794L28.3714 134.436ZM134.443 21.5507C133.539 20.6478 132.313 20.1407 131.036 20.1407C129.758 20.1407 128.533 20.6478 127.629 21.5507L117.986 31.1936C117.512 31.635 117.132 32.1673 116.869 32.7587C116.605 33.3501 116.463 33.9886 116.452 34.6359C116.44 35.2833 116.56 35.9264 116.802 36.5267C117.045 37.1271 117.405 37.6724 117.863 38.1303C118.321 38.5881 118.867 38.949 119.467 39.1915C120.067 39.434 120.71 39.5531 121.358 39.5417C122.005 39.5302 122.643 39.3885 123.235 39.125C123.826 38.8615 124.359 38.4816 124.8 38.0079L134.443 28.365C135.346 27.461 135.853 26.2355 135.853 24.9579C135.853 23.6802 135.346 22.4547 134.443 21.5507V21.5507ZM127.629 134.443C128.543 135.295 129.751 135.758 131 135.736C132.25 135.714 133.441 135.208 134.325 134.325C135.208 133.441 135.714 132.25 135.736 131.001C135.758 129.751 135.295 128.543 134.443 127.629L124.8 117.986C123.886 117.134 122.677 116.67 121.428 116.692C120.179 116.714 118.987 117.221 118.104 118.104C117.22 118.987 116.714 120.179 116.692 121.428C116.67 122.677 117.134 123.886 117.986 124.8L127.629 134.443Z"
            fill="#F2B71E"
          />
        </svg>
      );
    case "mainlyClear":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.74 5.47C15.1 6.5 16.35 9.03 15.92 11.46C16.5723 12.0231 17.0957 12.72 17.4546 13.5034C17.8135 14.2868 17.9995 15.1383 18 16V16.17C18.3213 16.057 18.6594 15.9995 19 16C19.7956 16 20.5587 16.3161 21.1213 16.8787C21.6839 17.4413 22 18.2044 22 19C22 19.7956 21.6839 20.5587 21.1213 21.1213C20.5587 21.6839 19.7956 22 19 22H6C4.93913 22 3.92172 21.5786 3.17157 20.8284C2.42143 20.0783 2 19.0609 2 18C2 16.9391 2.42143 15.9217 3.17157 15.1716C3.92172 14.4214 4.93913 14 6 14H6.27C5 12.45 4.6 10.24 5.5 8.26C6.09085 6.93059 7.18521 5.89005 8.5427 5.36693C9.9002 4.84381 11.4098 4.88088 12.74 5.47M11.93 7.3C10.16 6.5 8.09 7.31 7.31 9.07C6.85 10.09 6.93 11.22 7.41 12.13C7.97322 11.4614 8.676 10.9243 9.46895 10.5563C10.2619 10.1884 11.1258 9.99847 12 10C12.7 10 13.38 10.12 14 10.34C13.9704 9.69129 13.7611 9.06355 13.3956 8.52678C13.0301 7.99001 12.5227 7.5653 11.93 7.3M13.55 3.64C13 3.4 12.45 3.23 11.88 3.12L14.37 1.82L15.27 4.71C14.7465 4.27886 14.1681 3.91906 13.55 3.64M6.09 4.44C5.6 4.79 5.17 5.19 4.8 5.63L4.91 2.82L7.87 3.5C7.25 3.71 6.65 4.03 6.09 4.44ZM18 9.71C17.91 9.12 17.78 8.55 17.59 8L19.97 9.5L17.92 11.73C18.03 11.08 18.05 10.4 18 9.71M3.04 11.3C3.11 11.9 3.24 12.47 3.43 13L1.06 11.5L3.1 9.28C3 9.93 2.97 10.61 3.04 11.3M19 18H16V16C16 14.9391 15.5786 13.9217 14.8284 13.1716C14.0783 12.4214 13.0609 12 12 12C10.9391 12 9.92172 12.4214 9.17157 13.1716C8.42143 13.9217 8 14.9391 8 16H6C5.46957 16 4.96086 16.2107 4.58579 16.5858C4.21071 16.9609 4 17.4696 4 18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H19C19.2652 20 19.5196 19.8946 19.7071 19.7071C19.8946 19.5196 20 19.2652 20 19C20 18.7348 19.8946 18.4804 19.7071 18.2929C19.5196 18.1054 19.2652 18 19 18Z"
            fill="#F2B71E"
          />
        </svg>
      );
    case "partyCloudy":
      return (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="#F2B71E"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.74 5.47001C15.1 6.50001 16.35 9.03001 15.92 11.46C16.5723 12.0231 17.0957 12.72 17.4546 13.5034C17.8135 14.2868 17.9995 15.1383 18 16V16.17C18.3213 16.057 18.6594 15.9995 19 16C19.7956 16 20.5587 16.3161 21.1213 16.8787C21.6839 17.4413 22 18.2044 22 19C22 19.7957 21.6839 20.5587 21.1213 21.1213C20.5587 21.6839 19.7956 22 19 22H6C4.93913 22 3.92172 21.5786 3.17157 20.8284C2.42143 20.0783 2 19.0609 2 18C2 16.9391 2.42143 15.9217 3.17157 15.1716C3.92172 14.4214 4.93913 14 6 14H6.27C5 12.45 4.6 10.24 5.5 8.26001C6.09085 6.9306 7.18521 5.89006 8.5427 5.36693C9.90019 4.84381 11.4098 4.88088 12.74 5.47001M11.93 7.30001C10.16 6.50001 8.09 7.31001 7.31 9.07001C6.85 10.09 6.93 11.22 7.41 12.13C7.97322 11.4615 8.67599 10.9243 9.46895 10.5563C10.2619 10.1884 11.1258 9.99848 12 10C12.7 10 13.38 10.12 14 10.34C13.9704 9.69129 13.7611 9.06356 13.3956 8.52679C13.0301 7.99002 12.5227 7.56531 11.93 7.30001M13.55 3.64001C13 3.40001 12.45 3.23001 11.88 3.12001L14.37 1.82001L15.27 4.71001C14.7465 4.27887 14.1681 3.91906 13.55 3.64001M6.09 4.44001C5.6 4.79001 5.17 5.19001 4.8 5.63001L4.91 2.82001L7.87 3.50001C7.25 3.71001 6.65 4.03001 6.09 4.44001ZM18 9.71001C17.91 9.12001 17.78 8.55001 17.59 8.00001L19.97 9.50001L17.92 11.73C18.03 11.08 18.05 10.4 18 9.71001M3.04 11.3C3.11 11.9 3.24 12.47 3.43 13L1.06 11.5L3.1 9.28001C3 9.93001 2.97 10.61 3.04 11.3M19 18H16V16C16 14.9391 15.5786 13.9217 14.8284 13.1716C14.0783 12.4214 13.0609 12 12 12C10.9391 12 9.92172 12.4214 9.17157 13.1716C8.42142 13.9217 8 14.9391 8 16H6C5.46956 16 4.96086 16.2107 4.58578 16.5858C4.21071 16.9609 4 17.4696 4 18C4 18.5304 4.21071 19.0391 4.58578 19.4142C4.96086 19.7893 5.46956 20 6 20H19C19.2652 20 19.5196 19.8947 19.7071 19.7071C19.8946 19.5196 20 19.2652 20 19C20 18.7348 19.8946 18.4804 19.7071 18.2929C19.5196 18.1054 19.2652 18 19 18Z"
            fill="#F2B71E"
          />
        </svg>
      );
    case "overcast":
      return (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 7C13.465 7 14.863 8.574 15.066 10.474H15.128C16.714 10.474 18 11.711 18 13.237C18 14.763 16.714 16 15.128 16H6.872C5.286 16 4 14.763 4 13.237C4 11.711 5.286 10.474 6.872 10.474H6.934C7.139 8.561 8.535 7 11 7ZM11 8C9.35 8 7.913 9.27 7.913 11.025C7.913 11.303 7.659 11.521 7.368 11.521H6.818C5.814 11.521 5 12.3 5 13.261C5 14.22 5.814 15 6.818 15H15.182C16.186 15 17 14.221 17 13.26C17 12.3 16.186 11.521 15.182 11.521H14.632C14.342 11.521 14.087 11.303 14.087 11.025C14.087 9.248 12.65 8 11 8ZM8.392 4C9.848 4 11.118 4.828 11.745 6.045C11.319 5.99217 10.8886 5.9848 10.461 6.023C10.214 5.70507 9.89771 5.44768 9.53624 5.2704C9.17476 5.09313 8.77761 5.00065 8.375 5C7.7462 5.00298 7.13863 5.22779 6.65934 5.63483C6.18005 6.04186 5.85979 6.60499 5.755 7.225L5.718 7.435C5.67791 7.6674 5.55697 7.87816 5.37655 8.03003C5.19613 8.18191 4.96783 8.26513 4.732 8.265H4.474C3.66 8.265 3 8.933 3 9.757C3 10.327 3.315 10.822 3.778 11.073C3.564 11.345 3.388 11.649 3.258 11.975C2.78161 11.6848 2.4102 11.2501 2.19778 10.7343C1.98535 10.2185 1.94296 9.64839 2.07679 9.10683C2.21062 8.56528 2.51368 8.08052 2.94192 7.72303C3.37016 7.36553 3.90125 7.15394 4.458 7.119L4.679 7.114C4.8332 6.24133 5.2899 5.45087 5.9689 4.88141C6.6479 4.31195 7.50581 3.99988 8.392 4V4Z"
            fill="#F2B71E"
          />
        </svg>
      );
    case "windy":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#C7DEFC"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 5C3 4.4 3.4 4 4 4H5C5.6 4 6 4.4 6 5C6 5.6 5.6 6 5 6H4C3.4 6 3 5.6 3 5ZM4 13C4 12.4 4.4 12 5 12H6C6.6 12 7 12.4 7 13C7 13.6 6.6 14 6 14H5C4.4 14 4 13.6 4 13ZM4 16C3.4 16 3 16.4 3 17C3 17.6 3.4 18 4 18H9C9.6 18 10 17.6 10 17C10 16.4 9.6 16 9 16H4ZM18 5C18 4.4 18.4 4 19 4H21C21.6 4 22 4.4 22 5C22 5.6 21.6 6 21 6H19C18.4 6 18 5.6 18 5ZM7 20C6.4 20 6 20.4 6 21C6 21.6 6.4 22 7 22H11C11.6 22 12 21.6 12 21C12 20.4 11.6 20 11 20H7ZM3 10C2.4 10 2 9.6 2 9C2 8.4 2.4 8 3 8H12C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C11.4 4 10.9 4.2 10.6 4.6C10.2 5 9.6 5 9.2 4.6C8.8 4.2 8.8 3.6 9.2 3.2C9.9 2.5 10.9 2 12 2C14.2 2 16 3.8 16 6C16 8.2 14.2 10 12 10H3ZM19 12C19.6 12 20 11.6 20 11C20 10.4 19.6 10 19 10C18.7 10 18.5 10.1 18.3 10.3C17.9 10.7 17.3 10.7 16.9 10.3C16.5 9.9 16.5 9.3 16.9 8.9C17.4 8.3 18.2 8 19 8C20.7 8 22 9.3 22 11C22 12.7 20.7 14 19 14H10C9.4 14 9 13.6 9 13C9 12.4 9.4 12 10 12H19M18 18H13C12.4 18 12 17.6 12 17C12 16.4 12.4 16 13 16H18C19.7 16 21 17.3 21 19C21 20.7 19.7 22 18 22C17.2 22 16.4 21.7 15.9 21.1C15.5 20.7 15.5 20.1 15.9 19.7C16.3 19.3 16.9 19.3 17.3 19.7C17.5 19.9 17.7 20 18 20C18.6 20 19 19.6 19 19C19 18.4 18.6 18 18 18V18Z"
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
            d="M29.316 8.051L11.316 2.051C11.1626 1.99996 10.9992 1.98686 10.8397 2.01281C10.6801 2.03876 10.5293 2.10299 10.4 2.2L4 7V2H2V30H4V11L10.4 15.8C10.5293 15.897 10.6801 15.9612 10.8397 15.9872C10.9992 16.0131 11.1626 16 11.316 15.949L29.316 9.949C29.515 9.88255 29.688 9.7552 29.8106 9.58498C29.9332 9.41475 29.9992 9.21028 29.9992 9.0005C29.9992 8.79072 29.9332 8.58625 29.8106 8.41602C29.688 8.2458 29.515 8.11845 29.316 8.052V8.051ZM10 13L4.667 9L10 5V13ZM14 12.946L12 13.613V4.387L14 5.054V12.946ZM18 11.613L16 12.279V5.721L18 6.387V11.613ZM20 10.946V7.054L25.838 9L20 10.946Z"
            fill="#C7DEFC"
          />
          <path
            d="M20 22C20 20.9391 19.5786 19.9217 18.8284 19.1716C18.0783 18.4214 17.0609 18 16 18C14.9391 18 13.9217 18.4214 13.1716 19.1716C12.4214 19.9217 12 20.9391 12 22H14C14 21.6044 14.1173 21.2178 14.3371 20.8889C14.5568 20.56 14.8692 20.3036 15.2346 20.1522C15.6001 20.0009 16.0022 19.9613 16.3902 20.0384C16.7781 20.1156 17.1345 20.3061 17.4142 20.5858C17.6939 20.8655 17.8844 21.2219 17.9616 21.6098C18.0387 21.9978 17.9991 22.3999 17.8478 22.7654C17.6964 23.1308 17.44 23.4432 17.1111 23.6629C16.7822 23.8827 16.3956 24 16 24H8V26H16C17.0605 25.9987 18.0771 25.5768 18.827 24.827C19.5768 24.0771 19.9987 23.0605 20 22V22Z"
            fill="#C7DEFC"
          />
          <path
            d="M26 22C24.9395 22.0013 23.9229 22.4232 23.173 23.173C22.4232 23.9229 22.0013 24.9395 22 26H24C24 25.6044 24.1173 25.2178 24.3371 24.8889C24.5568 24.56 24.8692 24.3036 25.2346 24.1522C25.6001 24.0009 26.0022 23.9613 26.3902 24.0384C26.7781 24.1156 27.1345 24.3061 27.4142 24.5858C27.6939 24.8655 27.8844 25.2219 27.9616 25.6098C28.0387 25.9978 27.9991 26.3999 27.8478 26.7654C27.6964 27.1308 27.44 27.4432 27.1111 27.6629C26.7822 27.8827 26.3956 28 26 28H12V30H26C27.0609 30 28.0783 29.5786 28.8284 28.8284C29.5786 28.0783 30 27.0609 30 26C30 24.9391 29.5786 23.9217 28.8284 23.1716C28.0783 22.4214 27.0609 22 26 22Z"
            fill="#C7DEFC"
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
    default:
      return null;
  }
};

export default GlobalSvgSelector;
