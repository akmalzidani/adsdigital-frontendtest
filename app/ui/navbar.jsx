"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function NavbarLandingPage() {
  useEffect(() => {
    // Dynamically import initFlowbite when running on the client
    if (typeof window !== "undefined") {
      import("flowbite").then(({ initFlowbite }) => {
        initFlowbite();
      });
    }
  }, []);

  const pathname = usePathname();

  // Define routes where the Navbar should not be displayed
  const hideNavbarRoutes = ["/auth/login", "/auth/register", "/dashboard"];

  // Check if the current route is in the hideNavbarRoutes array
  const shouldShowNavbar = !hideNavbarRoutes.includes(pathname);

  if (!shouldShowNavbar) {
    return null;
  }
  return (
    <nav className="fixed md:fixed md:rounded-lg md:-translate-y-1/2 md:left-1/2 md:-translate-x-1/2 top-0 z-20 w-full bg-white border-b border-gray-200 md:max-w-[691.31px] md:top-[64px] md:shadow-xl start-0 ">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <Link
          href="#"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/logo.svg"
            width={137.31}
            height={26.09}
            alt="ForwardIN Logo"
          />
        </Link>
        <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <Link
            href="/auth/login"
            className="hidden px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 md:block"
          >
            Sign in
          </Link>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:text-primary focus:ring-gray-200 "
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                aria-current="page"
                className="flex items-center justify-center w-full px-3 py-2 text-center text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:text-blue-700 md:p-0 md:w-auto "
              >
                Features{" "}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdownNavbar"
                className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
              >
                <ul
                  className="py-2 text-sm text-gray-700 "
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <Link
                      href="#getting-started"
                      className="block px-4 py-2 hover:bg-gray-100 "
                    >
                      Get Started
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#broadcast"
                      className="block px-4 py-2 hover:bg-gray-100 "
                    >
                      Broadcast
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#campaign"
                      className="block px-4 py-2 hover:bg-gray-100 "
                    >
                      Campaign
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#auto-reply"
                      className="block px-4 py-2 hover:bg-gray-100 "
                    >
                      Auto Reply
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#pricing"
                      className="block px-4 py-2 hover:bg-gray-100 "
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <Link
                      href="#footer"
                      className="block px-4 py-2 hover:bg-gray-100 "
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#footer"
                      className="block px-4 py-2 hover:bg-gray-100 "
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link
                href="#"
                className="block px-3 py-2 text-center text-gray-900 bg-blue-700 rounded md:bg-transparent md:hover:text-blue-700 md:p-0 "
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block px-3 py-2 text-center text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
              >
                Demo
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block px-3 py-2 text-center text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/auth/login"
                className="block px-3 py-2 text-center text-gray-900 rounded md:hidden hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Sign in
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
