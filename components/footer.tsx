import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const Footer = () => {
  const router = useRouter();

  return (
    <>
      <footer className="footer bg-[#0a1427] p-10 text-zinc-100">
        <div>
          <span className="footer-title">Services</span>
          <Link
            href={"https://www.fibonacciku.com"}
            className="link-hover link"
          >
            Personal tutor
          </Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link
            href={"https://www.fibonacciku.com/about"}
            className="link-hover link"
          >
            About us
          </Link>
          <Link
            href={"https://www.fibonacciku.com/contact"}
            className="link-hover link"
          >
            Contact
          </Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link
            href={"https://www.fibonacciku.com/terms-of-use"}
            target="_blank"
            className="link-hover link"
          >
            Terms of use
          </Link>
          <Link
            href={"https://www.fibonacciku.com/privacy-policy"}
            target="_blank"
            className="link-hover link"
          >
            Privacy policy
          </Link>
        </div>
      </footer>
      <footer className="footer bg-[#0a1427] px-10 py-4 text-zinc-100">
        <div className="grid-flow-col items-center">
          <Image
            src={"/logo.webp"}
            alt="FibonacciKu Logo"
            width={48}
            height={48}
            priority
            className="h-auto w-auto cursor-pointer"
            onClick={() => router.push("https://www.fibonacciku.com")}
          />
          <p className="font-bold">
            FibonacciKu <br />
            <span className="font-semibold">
              Design for students by students
            </span>
          </p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <Link href={"https://www.youtube.com/@fibonacciku"} target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </Link>
            <Link href={"https://www.tiktok.com/@fibonacciku"} target="_blank">
              <svg
                fill="#f4f4f5"
                width="24"
                height="24"
                viewBox="0 0 512 512"
                id="icons"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#f4f4f5"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z"></path>
                </g>
              </svg>
            </Link>
            <Link
              href={"https://www.linkedin.com/company/fibonacciku"}
              target="_blank"
            >
              <svg
                viewBox="0 0 20 20"
                version="1.1"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="#f4f4f5"
                stroke="#f4f4f5"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>linkedin [#f4f4f5]</title>{" "}
                  <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    {" "}
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-180.000000, -7479.000000)"
                      fill="#f4f4f5"
                    >
                      {" "}
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        {" "}
                        <path
                          d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z"
                          id="linkedin-[#f4f4f5]"
                        >
                          {" "}
                        </path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </Link>
          </div>
        </div>
      </footer>
      <footer className="footer footer-center bg-[#0a1427] p-4 text-zinc-100">
        <div>
          <p>
            Copyright © 2023 - All right reserved. Made with{" "}
            <span className="text-accent">❤</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
