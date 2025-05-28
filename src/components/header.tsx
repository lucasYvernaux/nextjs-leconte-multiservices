"use client";

import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "./ui/collapsible";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const navLink = document.querySelectorAll("nav li a");

    if (navLink.length != 0) {
      navLink.forEach((link) => {
        if (link.getAttribute("href") == document.location.pathname)
          link.classList.add("active");
        else link.classList.remove("active");

        link.addEventListener("click", function (e: Event) {
          navLink.forEach((activeLink) => {
            if (
              activeLink.getAttribute("href") ==
              "/" +
                String(e.target).split("/")[
                  String(e.target).split("/").length - 1
                ]
            )
              activeLink.classList.add("active");
            else activeLink.classList.remove("active");
          });
        });
      });
    }
  });

  return (
    <header className="sticky top-0 h-auto w-screen z-3 px-4 py-4 bg-leconte-primary">
      <nav className="flex items-center">
        <Link
          className="text-xl flex gap-4 items-center font-bold leading-none w-1/2"
          href="/"
        >
          <Image
            src="/images/LECONTE-MULTISERVICES-v2-removebg-preview.png"
            alt="logo"
            width={50}
            height={50}
            className="w-[50px] h-[50px]"
          />
          <span>Leconte Multiservices</span>
        </Link>
        <div className="w-1/2 px-4 flex justify-end">
          <div className="lg:hidden">
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
              <CollapsibleTrigger className="flex items-center text-leconte-secondary p-3">
                <svg
                  className="block h-4 w-4 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="relative z-50">
                  <div className="fixed inset-0 bg-gray-800 opacity-25"></div>
                  <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                    <div className="flex items-center mb-8">
                      <Link
                        className="mr-auto text-3xl font-bold leading-none"
                        href="/"
                      >
                        <Image
                          src="/images/LECONTE-MULTISERVICES-v2-removebg-preview.png"
                          alt="logo"
                          width={50}
                          height={50}
                          className="w-[50px] h-[50px]"
                        />
                      </Link>
                      <CollapsibleTrigger>
                        <svg
                          className="h-6 w-6  cursor-pointer hover:text-leconte-gray"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                      </CollapsibleTrigger>
                    </div>
                    <div>
                      <ul>
                        <li className="mb-1">
                          <CollapsibleTrigger asChild>
                            <Link
                              className="block p-4 text-base font-semibold  hover:bg-blue-50 hover:text-blue-600 rounded"
                              href="/"
                            >
                              Accueil mobile collapse
                            </Link>
                          </CollapsibleTrigger>
                        </li>
                        <li className="mb-1">
                          <CollapsibleTrigger asChild>
                            <Link
                              className="block p-4 text-base font-semibold  hover:bg-blue-50 hover:text-blue-600 rounded"
                              href="/services"
                            >
                              Dépannage
                            </Link>
                          </CollapsibleTrigger>
                        </li>
                        <li className="mb-1">
                          <CollapsibleTrigger asChild>
                            <Link
                              className="block p-4 text-base font-semibold  hover:bg-blue-50 hover:text-blue-600 rounded"
                              href="/renov"
                            >
                              Rénovation
                            </Link>
                          </CollapsibleTrigger>
                        </li>
                        <li className="mb-1">
                          <CollapsibleTrigger asChild>
                            <Link
                              className="block p-4 text-base font-semibold  hover:bg-blue-50 hover:text-blue-600 rounded"
                              href="/about"
                            >
                              A Propos
                            </Link>
                          </CollapsibleTrigger>
                        </li>
                        <li className="mb-1">
                          <CollapsibleTrigger asChild>
                            <Link
                              className="block p-4 text-base font-semibold  hover:bg-blue-50 hover:text-blue-600 rounded"
                              href="/contact"
                            >
                              Contact
                            </Link>
                          </CollapsibleTrigger>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
          <ul className="hidden text-white float-right top-1/2 justify-end lg:flex lg:flex lg:items-center lg:space-x-6">
            <li>
              <Link className="text-base hover:text-leconte-gray" href="/">
                Accueil
              </Link>
            </li>

            <li>
              <Link
                className="text-base hover:text-leconte-gray"
                href="/services"
              >
                Dépannage
              </Link>
            </li>

            <li>
              <Link
                className="text-base  hover:text-leconte-gray"
                href="/renov"
              >
                Rénovation
              </Link>
            </li>

            <li>
              <Link
                className="text-base  hover:text-leconte-gray"
                href="/about"
              >
                A Propos
              </Link>
            </li>

            <li>
              <Link
                className="text-base hover:text-leconte-gray"
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
