import React from "react";
import Link from "next/link";
// import { Fragment } from "react";
// import { Disclosure, Menu, Transition } from "@headlessui/react";
// import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

// const navigation = [
//   { name: "Dashboard", href: "#", current: true },
//   { name: "Team", href: "#", current: false },
//   { name: "Projects", href: "#", current: false },
//   { name: "Calendar", href: "#", current: false },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function Navbar() {
  return (
    <nav className="flex space-x-7 py-4">
      <img className="w-20 h-12" src="https://i.imgur.com/6r1X7bF.png" />
      <p className="text-2xl font-bold text-grey-800 hover:text-[#081453]">
        Gemeente Rotterbosch
      </p>
      <Link
        className="hover:text-[#081453] rounded transition duration-300 ease-in-out"
        href="/blogs/blog35"
      >
        <p className="text-2xl font-bold text-grey-800">Recente Blog</p>
      </Link>
    </nav>
    // <Disclosure as="nav" className="bg-blue-700">
    //   {({ open }) => (
    //     <>
    //       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    //         <div className="relative flex h-16 items-center justify-between">
    //           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
    //             {/* Mobile menu button*/}
    //             <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
    //               <span className="sr-only">Open main menu</span>
    //               {open ? (
    //                 <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
    //               ) : (
    //                 <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
    //               )}
    //             </Disclosure.Button>
    //           </div>
    //           <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
    //             <div className="flex flex-shrink-0 items-center">
    //               <img
    //                 className="block h-8 w-auto lg:hidden rounded"
    //                 src="https://i.imgur.com/6r1X7bF.png"
    //                 alt="Gemeente Rotterbosch"
    //               />
    //               <img
    //                 className="hidden h-8 w-auto lg:block rounded"
    //                 src="https://i.imgur.com/6r1X7bF.png"
    //                 alt="Gemeente Rotterbosch"
    //               />
    //             </div>
    //             <div className="hidden sm:ml-6 sm:block">
    //               <div className="flex space-x-4">
    //                 {navigation.map((item) => (
    //                   <a
    //                     key={item.name}
    //                     href={item.href}
    //                     className={classNames(
    //                       item.current
    //                         ? "bg-gray-900 text-white"
    //                         : "text-gray-300 hover:bg-gray-700 hover:text-white",
    //                       "px-3 py-2 rounded-md text-sm font-medium"
    //                     )}
    //                     aria-current={item.current ? "page" : undefined}
    //                   >
    //                     {item.name}
    //                   </a>
    //                 ))}
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       <Disclosure.Panel className="sm:hidden">
    //         <div className="space-y-1 px-2 pt-2 pb-3">
    //           {navigation.map((item) => (
    //             <Disclosure.Button
    //               key={item.name}
    //               as="a"
    //               href={item.href}
    //               className={classNames(
    //                 item.current
    //                   ? "bg-gray-900 text-white"
    //                   : "text-gray-300 hover:bg-gray-700 hover:text-white",
    //                 "block px-3 py-2 rounded-md text-base font-medium"
    //               )}
    //               aria-current={item.current ? "page" : undefined}
    //             >
    //               {item.name}
    //             </Disclosure.Button>
    //           ))}
    //         </div>
    //       </Disclosure.Panel>
    //     </>
    //   )}
    // </Disclosure>
  );
}
