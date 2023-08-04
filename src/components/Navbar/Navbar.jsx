import React from "react";

const Navbar = () => {
  return (
    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-white text-sm py-3 md:py-0 dark:bg-gray-800">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="relative md:flex md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <a
              className="flex-none text-xl font-semibold dark:text-white"
              href="#"
              aria-label="Brand"
            >
              <svg
                id="logo-87"
                width="202"
                height="40"
                viewBox="0 0 202 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="ccustom"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M25.5557 11.6853C23.9112 10.5865 21.9778 10 20 10V0C23.9556 0 27.8224 1.17298 31.1114 3.37061C34.4004 5.56823 36.9638 8.69181 38.4776 12.3463C39.9913 16.0008 40.3874 20.0222 39.6157 23.9018C38.844 27.7814 36.9392 31.3451 34.1421 34.1421C31.3451 36.9392 27.7814 38.844 23.9018 39.6157C20.0222 40.3874 16.0008 39.9913 12.3463 38.4776C8.6918 36.9638 5.56823 34.4004 3.37061 31.1114C1.17298 27.8224 0 23.9556 0 20H10C10 21.9778 10.5865 23.9112 11.6853 25.5557C12.7841 27.2002 14.3459 28.4819 16.1732 29.2388C18.0004 29.9957 20.0111 30.1937 21.9509 29.8078C23.8907 29.422 25.6725 28.4696 27.0711 27.0711C28.4696 25.6725 29.422 23.8907 29.8078 21.9509C30.1937 20.0111 29.9957 18.0004 29.2388 16.1732C28.4819 14.3459 27.2002 12.7841 25.5557 11.6853Z"
                  fill="#007DFC"
                ></path>
                <path
                  className="ccustom"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 1.47023e-06C10 1.31322 9.74135 2.61358 9.2388 3.82684C8.73625 5.04009 7.99966 6.14248 7.07107 7.07107C6.14249 7.99966 5.0401 8.73625 3.82684 9.2388C2.61358 9.74134 1.31322 10 6.15916e-06 10L5.72205e-06 20C2.62644 20 5.22716 19.4827 7.65368 18.4776C10.0802 17.4725 12.285 15.9993 14.1421 14.1421C15.9993 12.285 17.4725 10.0802 18.4776 7.65367C19.4827 5.22715 20 2.62643 20 -3.8147e-06L10 1.47023e-06Z"
                  fill="#007DFC"
                ></path>
                <path
                  className="ccustom"
                  d="M125.619 14.4525H120.767V29.8648H125.619V14.4525Z"
                  fill="#007DFC"
                ></path>
                <path
                  className="ccustom"
                  d="M121.307 11.5666C121.814 12.074 122.448 12.3277 123.209 12.3277C123.97 12.3277 124.594 12.074 125.08 11.5666C125.567 11.0381 125.81 10.4038 125.81 9.66385C125.81 8.90277 125.567 8.26849 125.08 7.76111C124.594 7.25369 123.97 7 123.209 7C122.448 7 121.814 7.25369 121.307 7.76111C120.82 8.26849 120.577 8.90277 120.577 9.66385C120.577 10.4038 120.82 11.0381 121.307 11.5666Z"
                  fill="#007DFC"
                ></path>
                <path
                  className="ccustom"
                  d="M51.1562 29.8648V7.47568H56.1351V25.4885H66.0612V29.8648H51.1562Z"
                  fill="#007DFC"
                ></path>
                <path
                  className="ccustom"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M75.0274 30.2136C73.4418 30.2136 72.0042 29.8648 70.7145 29.1671C69.446 28.4483 68.4418 27.4758 67.7018 26.2495C66.9619 25.0233 66.5919 23.6491 66.5919 22.1269C66.5919 20.6047 66.9619 19.2411 67.7018 18.036C68.4418 16.8309 69.446 15.8795 70.7145 15.1819C71.983 14.463 73.4207 14.1036 75.0274 14.1036C76.6342 14.1036 78.0718 14.4525 79.3403 15.1501C80.6088 15.8478 81.6131 16.8098 82.353 18.036C83.093 19.2411 83.463 20.6047 83.463 22.1269C83.463 23.6491 83.093 25.0233 82.353 26.2495C81.6131 27.4758 80.6088 28.4483 79.3403 29.1671C78.0718 29.8648 76.6342 30.2136 75.0274 30.2136ZM75.0274 25.8056C75.7251 25.8056 76.3382 25.6576 76.8668 25.3616C77.3953 25.0445 77.797 24.6111 78.0718 24.0614C78.3678 23.4906 78.5158 22.8457 78.5158 22.1269C78.5158 21.4081 78.3678 20.7844 78.0718 20.2559C77.7758 19.7062 77.3636 19.2834 76.835 18.9874C76.3276 18.6702 75.7251 18.5117 75.0274 18.5117C74.3509 18.5117 73.7484 18.6702 73.2198 18.9874C72.6913 19.2834 72.279 19.7062 71.983 20.2559C71.687 20.8056 71.5391 21.4398 71.5391 22.1586C71.5391 22.8563 71.687 23.4906 71.983 24.0614C72.279 24.6111 72.6913 25.0445 73.2198 25.3616C73.7484 25.6576 74.3509 25.8056 75.0274 25.8056Z"
                  fill="#007DFC"
                ></path>
                <path
                  className="ccustom"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M87.3057 35.8902C88.5953 36.4821 90.0858 36.7781 91.7772 36.7781C93.4262 36.7781 94.8956 36.4504 96.1852 35.795C97.4749 35.1396 98.4896 34.2306 99.2296 33.0678C99.9695 31.905 100.34 30.5308 100.34 28.9451V14.4525H95.5826V15.488C95.2288 15.1902 94.827 14.9402 94.3776 14.7379C93.553 14.3362 92.6122 14.1353 91.5552 14.1353C90.1387 14.1353 88.8807 14.4736 87.7814 15.1501C86.6819 15.8055 85.8152 16.7146 85.1809 17.8774C84.5466 19.0191 84.2296 20.3087 84.2296 21.7464C84.2296 23.1629 84.5466 24.4525 85.1809 25.6153C85.8152 26.7781 86.6819 27.6978 87.7814 28.3743C88.8807 29.0508 90.1387 29.3891 91.5552 29.3891C92.5911 29.3891 93.5319 29.1883 94.3776 28.7866C94.7872 28.592 95.1572 28.3627 95.4875 28.0986V29.072C95.4875 30.1502 95.1387 30.9853 94.441 31.5773C93.7645 32.1693 92.8237 32.4652 91.6186 32.4652C90.6461 32.4652 89.811 32.2961 89.1133 31.9578C88.4368 31.6196 87.8236 31.1227 87.2739 30.4673L84.293 33.4483C85.0329 34.5054 86.0372 35.3194 87.3057 35.8902ZM94.219 24.6322C93.7327 24.9282 93.1514 25.0762 92.4748 25.0762C91.7983 25.0762 91.2063 24.9282 90.6989 24.6322C90.2126 24.3362 89.8321 23.9345 89.5573 23.4271C89.2824 22.8986 89.145 22.3383 89.145 21.7464C89.145 21.1121 89.2824 20.5413 89.5573 20.0339C89.8321 19.5265 90.2232 19.1248 90.7306 18.8288C91.238 18.5328 91.8194 18.3848 92.4748 18.3848C93.1514 18.3848 93.7327 18.5328 94.219 18.8288C94.7264 19.1248 95.1069 19.5265 95.3607 20.0339C95.6355 20.5413 95.7729 21.1121 95.7729 21.7464C95.7729 22.3806 95.6355 22.9514 95.3607 23.4588C95.1069 23.9451 94.7264 24.3362 94.219 24.6322Z"
                  fill="#007DFC"
                ></path>
                <path
                  className="ccustom"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M110.551 30.2136C108.965 30.2136 107.527 29.8648 106.238 29.1671C104.969 28.4483 103.965 27.4758 103.225 26.2495C102.485 25.0233 102.115 23.6491 102.115 22.1269C102.115 20.6047 102.485 19.2411 103.225 18.036C103.965 16.8309 104.969 15.8795 106.238 15.1819C107.506 14.463 108.944 14.1036 110.551 14.1036C112.157 14.1036 113.595 14.4525 114.863 15.1501C116.132 15.8478 117.136 16.8098 117.876 18.036C118.616 19.2411 118.986 20.6047 118.986 22.1269C118.986 23.6491 118.616 25.0233 117.876 26.2495C117.136 27.4758 116.132 28.4483 114.863 29.1671C113.595 29.8648 112.157 30.2136 110.551 30.2136ZM110.551 25.8056C111.248 25.8056 111.861 25.6576 112.39 25.3616C112.918 25.0445 113.32 24.6111 113.595 24.0614C113.891 23.4906 114.039 22.8457 114.039 22.1269C114.039 21.4081 113.891 20.7844 113.595 20.2559C113.299 19.7062 112.887 19.2834 112.358 18.9874C111.851 18.6702 111.248 18.5117 110.551 18.5117C109.874 18.5117 109.271 18.6702 108.743 18.9874C108.214 19.2834 107.802 19.7062 107.506 20.2559C107.21 20.8056 107.062 21.4398 107.062 22.1586C107.062 22.8563 107.21 23.4906 107.506 24.0614C107.802 24.6111 108.214 25.0445 108.743 25.3616C109.271 25.6576 109.874 25.8056 110.551 25.8056Z"
                  fill="#007DFC"
                ></path>
                <path
                  className="ccustom"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M137.281 30.1819C136.246 30.1819 135.294 29.9811 134.427 29.5794C133.971 29.368 133.559 29.1156 133.191 28.8222V36.3659H128.402V14.4525H133.254V15.5162C133.606 15.2283 133.997 14.9794 134.427 14.7696C135.294 14.3467 136.246 14.1353 137.281 14.1353C138.74 14.1353 140.03 14.4842 141.15 15.1819C142.292 15.8795 143.18 16.8309 143.814 18.036C144.47 19.2411 144.797 20.6153 144.797 22.1586C144.797 23.702 144.47 25.0762 143.814 26.2813C143.18 27.4864 142.292 28.4377 141.15 29.1354C140.03 29.8331 138.74 30.1819 137.281 30.1819ZM136.394 25.8056C137.091 25.8056 137.694 25.647 138.201 25.3299C138.73 25.0128 139.142 24.5793 139.438 24.0297C139.734 23.48 139.882 22.8563 139.882 22.1586C139.882 21.4398 139.734 20.8056 139.438 20.2559C139.142 19.7062 138.73 19.2834 138.201 18.9874C137.694 18.6702 137.102 18.5117 136.425 18.5117C135.749 18.5117 135.146 18.6702 134.618 18.9874C134.11 19.2834 133.709 19.7062 133.413 20.2559C133.117 20.8056 132.969 21.4398 132.969 22.1586C132.969 22.8563 133.106 23.48 133.381 24.0297C133.677 24.5793 134.089 25.0128 134.618 25.3299C135.146 25.647 135.738 25.8056 136.394 25.8056Z"
                  fill="#007DFC"
                ></path>
                <path
                  className="ccustom"
                  d="M149.546 29.8965C150.434 30.1291 151.332 30.2453 152.241 30.2453C154.165 30.2453 155.687 29.8014 156.808 28.9134C157.949 28.0255 158.52 26.831 158.52 25.3299C158.52 24.3574 158.341 23.5751 157.981 22.9832C157.622 22.3701 157.157 21.8838 156.586 21.5244C156.015 21.165 155.412 20.8795 154.778 20.6681C154.144 20.4567 153.541 20.277 152.971 20.129C152.4 19.981 151.935 19.8119 151.575 19.6216C151.216 19.4313 151.036 19.1776 151.036 18.8605C151.036 18.5645 151.174 18.3425 151.448 18.1945C151.723 18.0254 152.135 17.9409 152.685 17.9409C153.256 17.9409 153.837 18.0571 154.429 18.2897C155.042 18.5222 155.592 18.924 156.078 19.4948L158.837 16.7041C158.14 15.8161 157.231 15.1501 156.11 14.7062C155.011 14.2411 153.806 14.0085 152.495 14.0085C151.248 14.0085 150.159 14.2199 149.229 14.6427C148.298 15.0656 147.579 15.647 147.072 16.3869C146.565 17.1057 146.311 17.962 146.311 18.9557C146.311 19.8859 146.491 20.6576 146.85 21.2707C147.209 21.8626 147.675 22.3278 148.245 22.666C148.816 23.0043 149.419 23.2686 150.053 23.4588C150.687 23.6491 151.29 23.8288 151.861 23.998C152.431 24.146 152.897 24.3257 153.256 24.5371C153.637 24.7274 153.827 25.0128 153.827 25.3933C153.827 25.6893 153.668 25.9218 153.351 26.091C153.055 26.2601 152.622 26.3447 152.051 26.3447C151.226 26.3447 150.465 26.1967 149.768 25.9007C149.07 25.5836 148.467 25.1502 147.96 24.6005L145.201 27.3912C145.73 27.962 146.364 28.4695 147.104 28.9134C147.865 29.3362 148.679 29.6639 149.546 29.8965Z"
                  fill="#007DFC"
                ></path>
                <path
                  className="ccustom"
                  d="M167.368 30.2136C165.952 30.2136 164.694 29.9282 163.595 29.3574C162.516 28.7654 161.671 27.962 161.058 26.9472C160.444 25.9113 160.138 24.7274 160.138 23.3954V14.4525H164.99V23.332C164.99 23.8605 165.074 24.3151 165.244 24.6956C165.434 25.0762 165.709 25.3722 166.068 25.5836C166.428 25.795 166.861 25.9007 167.368 25.9007C168.087 25.9007 168.658 25.6787 169.081 25.2347C169.504 24.7696 169.715 24.1354 169.715 23.332V14.4525H174.567V23.3637C174.567 24.7168 174.261 25.9113 173.647 26.9472C173.034 27.962 172.189 28.7654 171.11 29.3574C170.032 29.9282 168.785 30.2136 167.368 30.2136Z"
                  fill="#007DFC"
                ></path>
                <path
                  className="ccustom"
                  d="M181.831 14.4525H176.979V29.8648H181.831V20.8584C181.831 20.3299 181.937 19.8859 182.148 19.5265C182.381 19.1671 182.688 18.8922 183.068 18.702C183.449 18.4905 183.882 18.3848 184.368 18.3848C185.066 18.3848 185.647 18.6068 186.112 19.0508C186.599 19.4736 186.842 20.0762 186.842 20.8584V29.8648H191.694V20.8584C191.694 20.3299 191.8 19.8859 192.011 19.5265C192.244 19.1671 192.55 18.8922 192.931 18.702C193.311 18.4905 193.745 18.3848 194.231 18.3848C194.929 18.3848 195.51 18.6068 195.975 19.0508C196.461 19.4736 196.704 20.0762 196.704 20.8584V29.8648H201.557V20.3193C201.557 19.0297 201.282 17.9303 200.732 17.0212C200.203 16.0909 199.474 15.3827 198.544 14.8965C197.635 14.389 196.588 14.1353 195.404 14.1353C194.199 14.1353 193.11 14.3996 192.138 14.9282C191.506 15.2649 190.954 15.6995 190.481 16.2319C190.04 15.675 189.504 15.2193 188.871 14.8647C188.026 14.3785 187.064 14.1353 185.986 14.1353C184.844 14.1353 183.819 14.3785 182.91 14.8647C182.514 15.067 182.155 15.3093 181.831 15.5916V14.4525Z"
                  fill="#007DFC"
                ></path>
              </svg>
            </a>
            <div className="md:hidden">
              <button
                type="button"
                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden w-4 h-4"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden w-4 h-4"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>

          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
          >
            <div className="overflow-hidden overflow-y-auto max-h-[75vh] scrollbar-y">
              <div className="flex flex-col gap-x-0 mt-5 divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-end md:gap-x-7 md:mt-0 md:pl-7 md:divide-y-0 md:divide-solid dark:divide-gray-700">
                <a
                  className="font-medium text-blue-600 py-3 md:py-6 dark:text-blue-500"
                  href="#"
                  aria-current="page"
                >
                  Landing
                </a>

                {/* <a
                  className="font-medium text-gray-500 hover:text-gray-400 py-3 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                  href="#"
                >
                  Company
                </a> */}
                <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:py-6">
                  <button
                    type="button"
                    className="flex items-center w-full text-gray-800 hover:text-gray-600 font-medium dark:text-gray-200 dark:hover:text-gray-500"
                  >
                    Company
                    <svg
                      className="ml-2 w-2.5 h-2.5 text-gray-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </button>

                  <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-80 hidden z-10 bg-white md:shadow-2xl rounded-lg py-2 md:p-2 dark:bg-gray-800 dark:divide-gray-700 before:absolute top-full before:-top-5 before:left-0 before:w-full before:h-5">
                    <a
                      className="inline-flex gap-x-5 w-full p-4 text-gray-600 rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                      href="#"
                    >
                      <svg
                        className="flex-shrink-0 w-5 h-5 mt-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM3 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm2 7a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-2.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                        <path d="M2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1v2H2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-1V7h1a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm0 7v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-3-4v2H4V7h8z" />
                      </svg>
                      <div className="grow">
                        <span className="block font-semibold mb-1 text-gray-800 dark:text-gray-200">
                          Data
                        </span>
                        How you get the most accurate and up-to-date data
                      </div>
                    </a>

                    <div className="my-2 border-t border-gray-100 dark:border-gray-800"></div>

                    <a
                      className="inline-flex gap-x-5 w-full p-4 text-gray-600 rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                      href="#"
                    >
                      <svg
                        className="flex-shrink-0 w-5 h-5 mt-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                      </svg>
                      <div className="grow">
                        <span className="block font-semibold mb-1 text-gray-800 dark:text-gray-200">
                          Team{" "}
                          <span className="inline ml-1 text-xs bg-blue-600 text-white py-1 px-2 rounded-full">
                            We're hiring
                          </span>
                        </span>
                        Meet the people building products to help your business
                        grow
                      </div>
                    </a>

                    <div className="my-2 border-t border-gray-100 dark:border-gray-800"></div>

                    <a
                      className="inline-flex gap-x-5 w-full p-4 text-gray-600 rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                      href="#"
                    >
                      <svg
                        className="flex-shrink-0 w-5 h-5 mt-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z" />
                        <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z" />
                      </svg>
                      <div className="grow">
                        <span className="block font-semibold mb-1 text-gray-800 dark:text-gray-200">
                          Blog
                        </span>
                        The latest news, feature releases, and how to grow with
                        data
                      </div>
                    </a>
                  </div>
                </div>

                <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:py-4">
                  <button
                    type="button"
                    className="flex items-center w-full text-gray-500 hover:text-gray-400 font-medium dark:text-gray-400 dark:hover:text-gray-500"
                  >
                    Resources
                    <svg
                      className="ml-2 w-2.5 h-2.5 text-gray-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </button>

                  <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10 top-full left-0 min-w-[15rem] bg-white md:shadow-2xl rounded-lg py-2 md:p-4 dark:bg-gray-800 dark:divide-gray-700 before:absolute before:-top-5 before:left-0 before:w-full before:h-5">
                    <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="flex flex-col mx-1 md:mx-0">
                        <a
                          className="group flex gap-x-5 text-gray-800 hover:bg-gray-100 rounded-md p-4 dark:text-gray-200 dark:hover:bg-gray-900"
                          href="#"
                        >
                          <svg
                            className="flex-shrink-0 w-6 h-6 mt-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                          </svg>
                          <div className="grow">
                            <p className="font-medium text-gray-800 dark:text-gray-200">
                              Support Docs
                            </p>
                            <p className="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                              Explore advice and explanations for all of
                              Preline's features.
                            </p>
                          </div>
                        </a>

                        <a
                          className="group flex gap-x-5 text-gray-800 hover:bg-gray-100 rounded-md p-4 dark:text-gray-200 dark:hover:bg-gray-900"
                          href="#"
                        >
                          <svg
                            className="flex-shrink-0 w-6 h-6 mt-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z" />
                          </svg>
                          <div className="grow">
                            <p className="font-medium text-gray-800 dark:text-gray-200">
                              Integrations
                            </p>
                            <p className="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                              Discover the huge range of tools that Preline
                              integrates with.
                            </p>
                          </div>
                        </a>

                        <a
                          className="group flex gap-x-5 text-gray-800 hover:bg-gray-100 rounded-md p-4 dark:text-gray-200 dark:hover:bg-gray-900"
                          href="#"
                        >
                          <svg
                            className="flex-shrink-0 w-6 h-6 mt-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9zM3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z" />
                            <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12z" />
                          </svg>
                          <div className="grow">
                            <p className="font-medium text-gray-800 dark:text-gray-200">
                              API Reference
                            </p>
                            <p className="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                              Build custom integrations with our first-class
                              API.
                            </p>
                          </div>
                        </a>
                      </div>

                      <div className="flex flex-col mx-1 md:mx-0">
                        <a
                          className="group flex gap-x-5 text-gray-800 hover:bg-gray-100 rounded-md p-4 dark:text-gray-200 dark:hover:bg-gray-900"
                          href="#"
                        >
                          <svg
                            className="flex-shrink-0 w-6 h-6 mt-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                          </svg>
                          <div className="grow">
                            <p className="font-medium text-gray-800 dark:text-gray-200">
                              Help Center
                            </p>
                            <p className="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                              Learn how to install, set up, and use Preline.
                            </p>
                          </div>
                        </a>

                        <a
                          className="group flex gap-x-5 text-gray-800 hover:bg-gray-100 rounded-md p-4 dark:text-gray-200 dark:hover:bg-gray-900"
                          href="#"
                        >
                          <svg
                            className="flex-shrink-0 w-6 h-6 mt-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z" />
                          </svg>
                          <div className="grow">
                            <p className="font-medium text-gray-800 dark:text-gray-200">
                              Developer Hub
                            </p>
                            <p className="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                              Learn how to integrate or build on top of Preline.
                            </p>
                          </div>
                        </a>

                        <a
                          className="group flex gap-x-5 text-gray-800 hover:bg-gray-100 rounded-md p-4 dark:text-gray-200 dark:hover:bg-gray-900"
                          href="#"
                        >
                          <svg
                            className="flex-shrink-0 w-6 h-6 mt-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                          </svg>
                          <div className="grow">
                            <p className="font-medium text-gray-800 dark:text-gray-200">
                              Community Forum
                            </p>
                            <p className="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                              Learn, share, and connect with other Preline
                              users.
                            </p>
                          </div>
                        </a>
                      </div>

                      <div className="flex flex-col pt-4 md:pt-0 mx-1 md:mx-0">
                        <span className="text-sm font-semibold uppercase text-gray-800 dark:text-gray-200">
                          Customer stories
                        </span>

                        <a
                          className="mt-4 group flex gap-x-5 items-center"
                          href="#"
                        >
                          {/* <img class="w-32 h-32 rounded-lg" src="https://images.unsplash.com/photo-1648737967328-690548aec14f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80" alt="Image Description"> */}
                          <img
                            className="w-32 h-32 rounded-lg"
                            src="https://images.unsplash.com/photo-1648737967328-690548aec14f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80"
                            alt="Image Description"
                          ></img>
                          <div className="grow">
                            <p className="text-gray-800 dark:text-gray-200">
                              Preline Projects has proved to be most efficient
                              cloud based project tracking and bug tracking
                              tool.
                            </p>
                            <p className="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
                              Learn more
                              <svg
                                className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  className="font-medium text-gray-500 hover:text-gray-400 py-3 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                  href="#"
                >
                  Join us{" "}
                  <span className="py-0.5 px-1.5 rounded-full text-xs font-medium bg-blue-50 border border-blue-200 text-blue-600">
                    4
                  </span>
                </a>

                <div className="pt-3 md:pt-0">
                  <a
                    className="inline-flex justify-center items-center gap-x-2 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-2.5 px-3 dark:focus:ring-offset-gray-800"
                    href="#"
                  >
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
