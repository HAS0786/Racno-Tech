import React from "react";
import { Link } from "react-router-dom";
import { TbBrandVscode } from "react-icons/tb";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  return (
    <>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center">
                  <div className="flex text-xl font-medium">
                    <div><Link to={'/'}><TbBrandVscode size={30}role="button" /></Link> </div>
                    <div><Link to="/">Racno Tech</Link></div>
                  </div>
                  <div className="hidden md:flex gap-3 ml-10 items-center">
                    <Link
                      to="/"
                      className="text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Home
                    </Link>
                    <Link
                      to="/about"
                      className="text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      About
                    </Link>
                    <Link
                      to="/form"
                      className="text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Contact
                    </Link>
                  </div>
                </div>

                <div className="flex items-center">
                  <Menu as="div" className="relative inline-block text-left">
                    <MenuButton className="inline-flex justify-center w-full rounded-md bg-gray-700 px-4 py-2 text-sm font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      Services
                      <ChevronDownIcon
                        className="-mr-1 ml-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    </MenuButton>

                    <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-gray-600 text-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <MenuItem>
                          {({ active }) => (
                            <Link
                              to="/graphic"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900 font-semibold"
                                  : "text-gray-200 font-semibold",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Graphic Design
                            </Link>
                          )}
                        </MenuItem>
                        <MenuItem>
                          {({ active }) => (
                            <Link
                              to="/website"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900 font-semibold"
                                  : "text-gray-200 font-semibold",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Website Development
                            </Link>
                          )}
                        </MenuItem>
                        <MenuItem>
                          {({ active }) => (
                            <Link
                              to="/youtubeAnim"
                              className={classNames(
                                active
                                ? "bg-gray-100 text-gray-900 font-semibold"
                                : "text-gray-200 font-semibold",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              YouTube Animation
                            </Link>
                          )}
                        </MenuItem>
                        <MenuItem>
                          {({ active }) => (
                            <Link
                              to="/wordpress"
                              className={classNames(
                                active
                                ? "bg-gray-100 text-gray-900 font-semibold"
                                : "text-gray-200 font-semibold",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              WordPress
                            </Link>
                          )}
                        </MenuItem>
                        <MenuItem>
                          {({ active }) => (
                            <Link
                              to="/videoEditing"
                              className={classNames(
                                active
                                ? "bg-gray-100 text-gray-900 font-semibold"
                                : "text-gray-200 font-semibold",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Video Editing
                            </Link>
                          )}
                        </MenuItem>
                        <MenuItem>
                          {({ active }) => (
                            <Link
                              to="/assistant"
                              className={classNames(
                                active
                                ? "bg-gray-100 text-gray-900 font-semibold"
                                  : "text-gray-200 font-semibold",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Virtual Assistant
                            </Link>
                          )}
                        </MenuItem>
                        <MenuItem>
                          {({ active }) => (
                            <Link
                              to="/digitalmarketing"
                              className={classNames(
                                active
                                ? "bg-gray-100 text-gray-900 font-semibold"
                                : "text-gray-200 font-semibold",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Digital Marketing
                            </Link>
                          )}
                        </MenuItem>
                        <MenuItem>
                          {({ active }) => (
                            <Link
                              to="socialMedia"
                              className={classNames(
                                active
                                ? "bg-gray-100 text-gray-900 font-semibold"
                                : "text-gray-200 font-semibold",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Social Media Management
                            </Link>
                          )}
                        </MenuItem>
                        <MenuItem>
                          {({ active }) => (
                            <Link
                              to="/seo"
                              className={classNames(
                                active
                                ? "bg-gray-100 text-gray-900 font-semibold"
                                : "text-gray-200 font-semibold",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              SEO
                            </Link>
                          )}
                        </MenuItem>
                      </div>
                    </MenuItems>
                  </Menu>
                </div>

                <div className="flex md:hidden">
                  <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>
              </div>
            </div>

            <DisclosurePanel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to="/"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-gray-700"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-gray-700"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-gray-700"
                >
                  Contact
                </Link>
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
      {/* {children} */}
    </>
  );
};

export default Navbar;
