function LogoutIcon() {
  return (
    <svg
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-[#8BD9FF] hover:fill-red-700 ease-in duration-200 cursor-pointer"
    >
      <path
        opacity="0.4"
        d="M0 5.92933C0 2.66133 2.70698 0 6.03271 0H12.6475C15.9665 0 18.6667 2.65333 18.6667 5.916V20.7373C18.6667 24.0067 15.9597 26.6667 12.6326 26.6667H6.0205C2.7002 26.6667 0 24.0133 0 20.7507V19.4973V5.92933Z"
      />
      <path d="M26.3719 12.6064L22.5775 8.72771C22.1853 8.32771 21.5542 8.32771 21.1634 8.73037C20.7738 9.13304 20.7751 9.78237 21.166 10.1824L23.245 12.3064H21.2517H10.0646C9.5127 12.3064 9.0647 12.7664 9.0647 13.333C9.0647 13.901 9.5127 14.3597 10.0646 14.3597H23.245L21.166 16.4837C20.7751 16.8837 20.7738 17.533 21.1634 17.9357C21.3594 18.137 21.6153 18.2384 21.8724 18.2384C22.1269 18.2384 22.3827 18.137 22.5775 17.9384L26.3719 14.061C26.5602 13.8677 26.6667 13.6064 26.6667 13.333C26.6667 13.061 26.5602 12.7997 26.3719 12.6064Z" />
    </svg>
  );
}

function SideBarIcon() {
  return (
    <svg
      className="w-6 h-6 "
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

function SearchBarIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.59922 17.3065C13.3484 17.3065 17.1984 13.4323 17.1984 8.65324C17.1984 3.87419 13.3484 0 8.59922 0C3.85 0 0 3.87419 0 8.65324C0 13.4323 3.85 17.3065 8.59922 17.3065Z"
        fill="#8BD9FF"
      />
      <path
        opacity="0.4"
        d="M18.6746 19.9553C18.3406 19.9445 18.0229 19.807 17.7854 19.5705L15.7489 17.1902C15.3123 16.7909 15.2766 16.1123 15.6689 15.6689C15.8525 15.4831 16.1021 15.3787 16.3625 15.3787C16.6229 15.3787 16.8726 15.4831 17.0562 15.6689L19.6172 17.7181C19.9862 18.0957 20.1 18.6563 19.9079 19.1492C19.7158 19.6422 19.2536 19.9754 18.728 20L18.6746 19.9553Z"
        fill="#8BD9FF"
      />
    </svg>
  );
}

function HomeIcon({ svgIndex }: { svgIndex: number }) {
  return (
    <svg
      width="29"
      height="30"
      viewBox="0 0 29 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        svgIndex == 0 ? "fill-[#01FD91]" : "fill-[#8BD9FF] hover:fill-[#0097E2]"
      }  ease-in duration-200`}
    >
      <path d="M9.9656 28.1732V23.5729C9.96558 22.4071 10.9135 21.4601 12.0877 21.4527H16.3989C17.5783 21.4527 18.5344 22.4019 18.5344 23.5729V28.1598C18.5344 29.1709 19.356 29.9926 20.3744 30H23.3157C24.6895 30.0035 26.0081 29.4642 26.9808 28.5011C27.9534 27.5379 28.5 26.2301 28.5 24.8663V11.7988C28.5 10.6971 28.0081 9.65207 27.1569 8.94525L17.1645 1.0114C15.4178 -0.376316 12.9231 -0.331488 11.2281 1.11808L1.45052 8.94525C0.559111 9.63123 0.0263284 10.6793 0 11.7988V24.853C0 27.6956 2.32107 30 5.18426 30H8.05844C8.54876 30.0035 9.02023 29.8126 9.36821 29.4696C9.71619 29.1267 9.91189 28.66 9.91187 28.1732H9.9656Z" />
    </svg>
  );
}

function ChatIcon({ svgIndex }: { svgIndex: number }) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        svgIndex == 1 ? "fill-[#01FD91]" : "fill-[#8BD9FF] hover:fill-[#0097E2]"
      }  ease-in duration-200`}
    >
      <path
        opacity="0.4"
        d="M15.03 0C6.315 0 0 7.11 0 15C0 17.52 0.735 20.115 2.025 22.485C2.265 22.875 2.295 23.37 2.13 23.835L1.125 27.195C0.9 28.005 1.59 28.605 2.355 28.365L5.385 27.465C6.21 27.195 6.855 27.54 7.6215 28.005C9.8115 29.295 12.54 29.955 15 29.955C22.44 29.955 30 24.21 30 14.955C30 6.975 23.55 0 15.03 0Z"
      />
      <path d="M8.05513 13.0952C9.12013 13.0952 9.97513 13.9502 9.97513 15.0152C9.97513 16.0652 9.12013 16.9202 8.05513 16.9352C7.00513 16.9352 6.13513 16.0652 6.13513 15.0152C6.13513 13.9502 6.99013 13.0952 8.05513 13.0952ZM14.9707 13.0952C16.0357 13.0952 16.8907 13.9502 16.8907 15.0152C16.8907 16.0652 16.0357 16.9352 14.9707 16.9352C13.9057 16.9202 13.0507 16.0652 13.0507 15.0002C13.0507 13.9502 13.9207 13.0802 14.9707 13.0952ZM21.8854 13.0952C22.9504 13.0952 23.8054 13.9502 23.8054 15.0152C23.8054 16.0652 22.9504 16.9352 21.8854 16.9352C20.8204 16.9352 19.9654 16.0652 19.9654 15.0152C19.9654 13.9502 20.8204 13.0952 21.8854 13.0952Z" />
    </svg>
  );
}

function GameIcon({ svgIndex }: { svgIndex: number }) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        svgIndex == 2 ? "fill-[#01FD91]" : "fill-[#8BD9FF] hover:fill-[#0097E2]"
      }  ease-in duration-200`}
    >
      <path
        opacity="0.4"
        d="M16.9576 5.82364V6.09821C16.2216 6.08376 15.4856 6.08376 14.7496 6.08376V5.83809C14.7496 4.84099 13.9105 4.03175 12.9095 4.03175H11.4522C9.78884 4.03175 8.43457 2.70229 8.43457 1.0838C8.43457 0.491325 8.93506 0 9.53859 0C10.1568 0 10.6426 0.491325 10.6426 1.0838C10.6426 1.51733 11.0106 1.86414 11.4522 1.86414H12.9095C15.1323 1.87859 16.9429 3.65603 16.9576 5.82364Z"
      />
      <path d="M14.7498 6.08405C15.4858 6.08405 16.2218 6.08405 16.9578 6.0985C18.3562 6.0985 19.7547 6.1274 21.1678 6.14185C26.2758 6.14185 30 9.78343 30 14.8123V21.2718C30 26.3006 26.2758 29.9422 21.1678 29.9422C19.1217 29.9855 17.0756 30 15.0147 30C12.9539 30 10.8783 29.9855 8.83219 29.9422C3.72424 29.9422 0 26.3006 0 21.2718V14.8123C0 9.78343 3.72424 6.14185 8.84691 6.14185C10.7753 6.11295 12.7478 6.08405 14.7498 6.08405ZM10.6281 14.3499C10.0098 14.3499 9.52404 14.8412 9.52404 15.4337V16.951H7.96369C7.36016 16.951 6.85967 17.4423 6.85967 18.0348C6.85967 18.6417 7.36016 19.1186 7.96369 19.1186H9.52404V20.6504C9.52404 21.2429 10.0098 21.7342 10.6281 21.7342C11.2316 21.7342 11.7321 21.2429 11.7321 20.6504V19.1186H13.2777C13.8813 19.1186 14.3817 18.6417 14.3817 18.0348C14.3817 17.4423 13.8813 16.951 13.2777 16.951H11.7321V15.4337C11.7321 14.8412 11.2316 14.3499 10.6281 14.3499ZM22.1982 19.4799H22.051C21.4328 19.4799 20.947 19.9712 20.947 20.5637C20.947 21.1706 21.4328 21.6475 22.051 21.6475H22.1982C22.8018 21.6475 23.3023 21.1706 23.3023 20.5637C23.3023 19.9712 22.8018 19.4799 22.1982 19.4799ZM19.6811 14.5088H19.5339C18.9156 14.5088 18.4298 15.0001 18.4298 15.5926C18.4298 16.1996 18.9156 16.6764 19.5339 16.6764H19.6811C20.2846 16.6764 20.7851 16.1996 20.7851 15.5926C20.7851 15.0001 20.2846 14.5088 19.6811 14.5088Z" />
    </svg>
  );
}
function ProfileIcon({ svgIndex }: { svgIndex: number }) {
  return (
    <svg
      width="24"
      height="30"
      viewBox="0 0 24 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        svgIndex == 3 ? "fill-[#01FD91]" : "fill-[#8BD9FF] hover:fill-[#0097E2]"
      }  ease-in duration-200`}
    >
      <path d="M11.9955 19.7623C5.526 19.7623 0 20.7823 0 24.8623C0 28.9438 5.4915 29.9998 11.9955 29.9998C18.465 29.9998 23.991 28.9813 23.991 24.8998C23.991 20.8183 18.501 19.7623 11.9955 19.7623Z" />
      <path
        opacity="0.4"
        d="M11.9955 15.876C16.4025 15.876 19.9335 12.3435 19.9335 7.938C19.9335 3.5325 16.4025 0 11.9955 0C7.59 0 4.0575 3.5325 4.0575 7.938C4.0575 12.3435 7.59 15.876 11.9955 15.876Z"
      />
    </svg>
  );
}

function SettingsIcon({ svgIndex }: { svgIndex: number }) {
  return (
    <svg
      width="29"
      height="30"
      viewBox="0 0 29 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        svgIndex == 4 ? "fill-[#01FD91]" : "fill-[#8BD9FF] hover:fill-[#0097E2]"
      }  ease-in duration-200`}
    >
      <path d="M14.2681 19.245C11.8614 19.245 9.91455 17.37 9.91455 15.015C9.91455 12.66 11.8614 10.77 14.2681 10.77C16.6748 10.77 18.5756 12.66 18.5756 15.015C18.5756 17.37 16.6748 19.245 14.2681 19.245Z" />
      <path
        opacity="0.4"
        d="M28.0952 18.555C27.8039 18.105 27.39 17.655 26.8535 17.37C26.4243 17.16 26.1484 16.815 25.9031 16.41C25.1213 15.12 25.5812 13.425 26.8842 12.66C28.4171 11.805 28.9077 9.9 28.0185 8.415L26.9915 6.645C26.1177 5.16 24.2015 4.635 22.6839 5.505C21.3349 6.225 19.6027 5.745 18.8209 4.47C18.5757 4.05 18.4377 3.6 18.4684 3.15C18.5143 2.565 18.3304 2.01 18.0545 1.56C17.4873 0.63 16.4602 0 15.3258 0H13.1644C12.0454 0.03 11.0183 0.63 10.4511 1.56C10.1598 2.01 9.99122 2.565 10.0219 3.15C10.0525 3.6 9.91457 4.05 9.6693 4.47C8.88751 5.745 7.15529 6.225 5.82164 5.505C4.2887 4.635 2.38786 5.16 1.49876 6.645L0.471688 8.415C-0.402085 9.9 0.0884544 11.805 1.60606 12.66C2.90906 13.425 3.36894 15.12 2.60247 16.41C2.34187 16.815 2.06594 17.16 1.63672 17.37C1.11552 17.655 0.655641 18.105 0.410371 18.555C-0.156815 19.485 -0.126157 20.655 0.44103 21.63L1.49876 23.43C2.06594 24.39 3.12367 24.99 4.22738 24.99C4.74858 24.99 5.36175 24.84 5.85229 24.54C6.23553 24.285 6.69541 24.195 7.20128 24.195C8.71888 24.195 9.99122 25.44 10.0219 26.925C10.0219 28.65 11.4322 30 13.2104 30H15.2952C17.0581 30 18.4684 28.65 18.4684 26.925C18.5143 25.44 19.7867 24.195 21.3043 24.195C21.7948 24.195 22.2547 24.285 22.6533 24.54C23.1438 24.84 23.7417 24.99 24.2782 24.99C25.3666 24.99 26.4243 24.39 26.9915 23.43L28.0645 21.63C28.6164 20.625 28.6624 19.485 28.0952 18.555Z"
      />
    </svg>
  );
}

function EditIconProfile() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="rounded   bg-opacity-50 h-1/4  bg-[#8BD9FF] 
                       hover:bg-[#357550] fill-[#9CD8FB] hover:fill-[#70F89B]  w-[17px]"
    >
      <path d="M22.5818 12.5963L12.7527 22.4743C12.2415 22.9719 11.5697 23.2499 10.8686 23.2499H7.43644C7.24657 23.2499 7.07131 23.1768 6.93987 23.0451C6.80842 22.9134 6.75 22.7377 6.75 22.5475L6.83763 19.0792C6.85224 18.3914 7.12973 17.7475 7.6117 17.2646L14.5783 10.2841C14.6951 10.167 14.8996 10.167 15.0164 10.2841L17.4598 12.7177C17.6205 12.8773 17.8542 12.9812 18.1025 12.9812C18.6429 12.9812 19.0664 12.5421 19.0664 12.0153C19.0664 11.7519 18.9642 11.5177 18.8035 11.3421C18.7597 11.2836 16.4331 8.96701 16.4331 8.96701C16.2871 8.82067 16.2871 8.57189 16.4331 8.42555L17.4117 7.43043C18.3172 6.52311 19.7777 6.52311 20.6832 7.43043L22.5818 9.33287C23.4727 10.2255 23.4727 11.689 22.5818 12.5963Z" />
    </svg>
  );
}

function EditIconWallpaper() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="rounded   bg-opacity-50  bg-[#8BD9FF] 
                hover:bg-[#357550] fill-[#9CD8FB] hover:fill-[#70F89B]  w-5 h-5"
    >
      <path d="M22.5818 12.5963L12.7527 22.4743C12.2415 22.9719 11.5697 23.2499 10.8686 23.2499H7.43644C7.24657 23.2499 7.07131 23.1768 6.93987 23.0451C6.80842 22.9134 6.75 22.7377 6.75 22.5475L6.83763 19.0792C6.85224 18.3914 7.12973 17.7475 7.6117 17.2646L14.5783 10.2841C14.6951 10.167 14.8996 10.167 15.0164 10.2841L17.4598 12.7177C17.6205 12.8773 17.8542 12.9812 18.1025 12.9812C18.6429 12.9812 19.0664 12.5421 19.0664 12.0153C19.0664 11.7519 18.9642 11.5177 18.8035 11.3421C18.7597 11.2836 16.4331 8.96701 16.4331 8.96701C16.2871 8.82067 16.2871 8.57189 16.4331 8.42555L17.4117 7.43043C18.3172 6.52311 19.7777 6.52311 20.6832 7.43043L22.5818 9.33287C23.4727 10.2255 23.4727 11.689 22.5818 12.5963Z" />
    </svg>
  );
}

function SvgShapingMethod() {
  return (
    <svg
      style={{ visibility: "hidden", position: "absolute" }}
      width="0"
      height="0"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      <defs>
        <filter id="round">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>
  );
}

function CloseButtonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
      <path
        d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 
  45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
      />
    </svg>
  );
}

function FriendIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="friend-icon fill-[#8BD9FF] ease-in duration-200"
    >
      <path
        opacity="0.4"
        d="M17.5301 7.77C17.4605 7.76 17.3897 7.76 17.3201 7.77C16.5732 7.74556 15.8653 7.43119 15.3463 6.89355C14.8273 6.3559 14.5381 5.63726 14.5401 4.89C14.5401 3.3 15.8301 2 17.4301 2C19.0201 2 20.3201 3.29 20.3201 4.89C20.318 5.63773 20.0261 6.35553 19.5058 6.89258C18.9855 7.42963 18.2774 7.74413 17.5301 7.77ZM20.7921 14.7C19.6721 15.45 18.1021 15.73 16.6521 15.54C17.0321 14.72 17.2321 13.81 17.2421 12.85C17.2421 11.85 17.0221 10.9 16.6021 10.07C18.0821 9.87 19.6521 10.15 20.7821 10.9C22.3621 11.94 22.3621 13.65 20.7921 14.7ZM6.43809 7.77C6.50809 7.76 6.57809 7.76 6.64809 7.77C7.39496 7.74556 8.10293 7.43119 8.62191 6.89355C9.14089 6.3559 9.43005 5.63726 9.42809 4.89C9.42809 3.3 8.13809 2 6.53809 2C4.94809 2 3.64809 3.29 3.64809 4.89C3.65023 5.63773 3.9421 6.35553 4.46237 6.89258C4.98264 7.42963 5.69081 7.74413 6.43809 7.77ZM6.55109 12.85C6.55109 13.82 6.76109 14.74 7.14109 15.57C5.73109 15.72 4.26109 15.42 3.18109 14.71C1.60109 13.66 1.60109 11.95 3.18109 10.9C4.25109 10.18 5.76109 9.89 7.18109 10.05C6.77109 10.89 6.55109 11.84 6.55109 12.85Z"
      />
      <path d="M12.12 15.87C12.0337 15.86 11.9464 15.86 11.86 15.87C10.9709 15.8401 10.1283 15.4655 9.51047 14.8253C8.89269 14.1851 8.54825 13.3297 8.55005 12.44C8.55005 10.54 10.08 9 11.99 9C13.89 9 15.43 10.54 15.43 12.44C15.43 14.3 13.97 15.81 12.12 15.87ZM8.87005 17.94C7.36005 18.95 7.36005 20.61 8.87005 21.61C10.59 22.76 13.41 22.76 15.13 21.61C16.64 20.6 16.64 18.94 15.13 17.94C13.42 16.79 10.6 16.79 8.87005 17.94Z" />
    </svg>
  );
}

function AchievementIcon() {
  return (
    <svg
      width="94"
      height="24"
      viewBox="0 0 94 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="friend-icon fill-[#8BD9FF] ease-in duration-200"
    >
      <path d="M48.3 8.11205L49.62 10.7521C49.8 11.1121 50.28 11.472 50.68 11.532L53.07 11.9321C54.6 12.192 54.96 13.2921 53.86 14.3921L52 16.2521C51.69 16.5621 51.51 17.1721 51.61 17.6121L52.14 19.9221C52.56 21.7421 51.59 22.4521 49.98 21.5021L47.74 20.1721C47.33 19.9321 46.67 19.9321 46.26 20.1721L44.02 21.5021C42.41 22.4521 41.44 21.7421 41.86 19.9221L42.39 17.6121C42.49 17.182 42.31 16.5721 42 16.2521L40.14 14.3921C39.04 13.2921 39.4 12.1821 40.93 11.9321L43.32 11.532C43.72 11.462 44.2 11.1121 44.38 10.7521L45.7 8.11205C46.41 6.68205 47.59 6.68205 48.3 8.11205Z" />
      <path
        opacity="0.4"
        d="M41 9.75C40.59 9.75 40.25 9.41 40.25 9V2C40.25 1.59 40.59 1.25 41 1.25C41.41 1.25 41.75 1.59 41.75 2V9C41.75 9.41 41.41 9.75 41 9.75ZM53 9.75C52.59 9.75 52.25 9.41 52.25 9V2C52.25 1.59 52.59 1.25 53 1.25C53.41 1.25 53.75 1.59 53.75 2V9C53.75 9.41 53.41 9.75 53 9.75ZM47 4.75C46.59 4.75 46.25 4.41 46.25 4V2C46.25 1.59 46.59 1.25 47 1.25C47.41 1.25 47.75 1.59 47.75 2V4C47.75 4.41 47.41 4.75 47 4.75Z"
      />
    </svg>
  );
}

function MatchHistoryIcon() {
  return (
    <svg
      width="94"
      height="24"
      viewBox="0 0 94 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="friend-icon fill-[#8BD9FF] ease-in duration-200"
    >
      <path
        opacity="0.4"
        d="M56 7V17C56 20 54.5 22 51 22H43C39.5 22 38 20 38 17V7C38 4 39.5 2 43 2H51C54.5 2 56 4 56 7Z"
      />
      <path d="M50.5 2V9.86C50.5 10.3 49.98 10.52 49.66 10.23L47.34 8.09C47.248 8.00337 47.1264 7.95513 47 7.95513C46.8736 7.95513 46.752 8.00337 46.66 8.09L44.34 10.23C44.2685 10.2964 44.1791 10.3403 44.0828 10.3565C43.9866 10.3727 43.8877 10.3603 43.7984 10.321C43.7091 10.2816 43.6333 10.217 43.5803 10.1351C43.5272 10.0532 43.4993 9.95758 43.5 9.86V2H50.5ZM52.5 14.75H48.25C47.84 14.75 47.5 14.41 47.5 14C47.5 13.59 47.84 13.25 48.25 13.25H52.5C52.91 13.25 53.25 13.59 53.25 14C53.25 14.41 52.91 14.75 52.5 14.75ZM52.5 18.75H44C43.59 18.75 43.25 18.41 43.25 18C43.25 17.59 43.59 17.25 44 17.25H52.5C52.91 17.25 53.25 17.59 53.25 18C53.25 18.41 52.91 18.75 52.5 18.75Z" />
    </svg>
  );
}

function RankingIcon() {
  return (
    <svg
      width="94"
      height="24"
      viewBox="0 0 94 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="friend-icon fill-[#8BD9FF] ease-in duration-200"
    >
      <path
        opacity="0.4"
        d="M43.67 14.7075H39C37.9 14.7075 37 15.6075 37 16.7075V22.7075H43.67V14.7075Z"
      />
      <path d="M48.33 10.7075H45.66C44.56 10.7075 43.66 11.6075 43.66 12.7075V22.7075H50.33V12.7075C50.33 12.1771 50.1193 11.6684 49.7442 11.2933C49.3692 10.9182 48.8605 10.7075 48.33 10.7075Z" />
      <path
        opacity="0.4"
        d="M55 17.7075H50.33V22.7075H57V19.7075C57 18.6075 56.1 17.7075 55 17.7075Z"
      />
      <path d="M50.0101 5.5575C50.3201 5.2475 50.4401 4.8775 50.3401 4.5575C50.2401 4.2375 49.9301 4.0075 49.4901 3.9375L48.5301 3.7775C48.4705 3.75613 48.4183 3.71791 48.3801 3.6675L47.8501 2.6075C47.4501 1.7975 46.5401 1.7975 46.1401 2.6075L45.6101 3.6675C45.5901 3.7075 45.5001 3.7675 45.4601 3.7775L44.5001 3.9375C44.0601 4.0075 43.7601 4.2375 43.6501 4.5575C43.5501 4.8775 43.6701 5.2475 43.9801 5.5575L44.7201 6.3075C44.7501 6.3375 44.7901 6.4575 44.7801 6.4975L44.5701 7.4175C44.4101 8.0975 44.6701 8.4075 44.8401 8.5375C45.0101 8.6575 45.3801 8.8175 45.9901 8.4575L46.8901 7.9275C46.9301 7.8975 47.0601 7.8975 47.1001 7.9275L48.0001 8.4575C48.2801 8.6275 48.5101 8.6775 48.6901 8.6775C48.9001 8.6775 49.0501 8.5975 49.1401 8.5375C49.3101 8.4175 49.5701 8.1075 49.4101 7.4175L49.2001 6.4975C49.1901 6.4475 49.2201 6.3375 49.2601 6.3075L50.0101 5.5575Z" />
    </svg>
  );
}

export {
  SideBarIcon,
  LogoutIcon,
  SearchBarIcon,
  HomeIcon,
  ChatIcon,
  GameIcon,
  ProfileIcon,
  SettingsIcon,
  EditIconProfile,
  EditIconWallpaper,
  SvgShapingMethod,
  CloseButtonIcon,
  FriendIcon,
  AchievementIcon,
  MatchHistoryIcon,
  RankingIcon,
};
