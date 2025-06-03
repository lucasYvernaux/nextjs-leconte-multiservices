"use client";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "./ui/collapsible";
import { usePathname } from "next/navigation";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 h-auto w-screen z-10 px-4 py-4 bg-leconte-primary">
      <nav className="flex relative w-full items-center">
        <div className="nav-logo flex-1">
          <Link
            className="text-xl flex gap-4 items-center font-bold leading-none w-fit"
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
        </div>
        <div className="me-4 flex-1">
          <div className="lg:hidden">
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
              <CollapsibleTrigger className="float-right cursor-pointer p-3">
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
                  <CollapsibleTrigger>
                    <div className="nav-overlay fixed inset-0 bg-gray-800 opacity-80"></div>
                  </CollapsibleTrigger>
                  <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                    <div className="flex items-center mb-8">
                      <Link
                        className="text-lg flex flex-1 items-center gap-4 font-bold leading-none"
                        href="/"
                      >
                        <Image
                          src="/images/LECONTE-MULTISERVICES-v2-removebg-preview.png"
                          alt="logo"
                          width={50}
                          height={50}
                        />
                        <span>Leconte Multiservices</span>
                      </Link>
                      <CollapsibleTrigger className="flex justify-end">
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

                    <ul className="flex flex-col gap-4">
                      <li className="mb-1">
                        <CollapsibleTrigger asChild>
                          <Link
                            className={`p-4 text-base font-semibold
                            ${pathname == "/" ? "active" : ""}
                            hover:bg-blue-50 hover:text-blue-600"`}
                            href="/"
                          >
                            Accueil
                          </Link>
                        </CollapsibleTrigger>
                      </li>
                      <li className="mb-1">
                        <CollapsibleTrigger asChild>
                          <Link
                            className={`p-4 text-base font-semibold
                            ${pathname == "/depannage" ? "active" : ""}
                            hover:bg-blue-50 hover:text-blue-600"`}
                            href="/depannage"
                          >
                            Dépannage
                          </Link>
                        </CollapsibleTrigger>
                      </li>
                      <li className="mb-1">
                        <CollapsibleTrigger asChild>
                          <Link
                            className={`p-4 text-base font-semibold
                            ${pathname == "/renovation" ? "active" : ""}
                            hover:bg-blue-50 hover:text-blue-600"`}
                            href="/renovation"
                          >
                            Rénovation
                          </Link>
                        </CollapsibleTrigger>
                      </li>
                      <li className="mb-1">
                        <CollapsibleTrigger asChild>
                          <Link
                            className={`p-4 text-base font-semibold
                            ${pathname == "/about" ? "active" : ""}
                            hover:bg-blue-50 hover:text-blue-600"`}
                            href="/about"
                          >
                            A Propos
                          </Link>
                        </CollapsibleTrigger>
                      </li>
                      <li className="mb-1">
                        <CollapsibleTrigger asChild>
                          <Link
                            className={`p-4 text-base font-semibold
                            ${pathname == "/contact" ? "active" : ""}
                            hover:bg-blue-50 hover:text-blue-600"`}
                            href="/contact"
                          >
                            Contact
                          </Link>
                        </CollapsibleTrigger>
                      </li>
                    </ul>
                  </nav>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
          <ul className="hidden text-white justify-end lg:flex items-center space-x-6">
            <li>
              <Link
                className={`text-base ${
                  pathname == "/" ? "active" : ""
                } hover:text-leconte-gray`}
                href="/"
              >
                Accueil
              </Link>
            </li>

            <li>
              <Link
                className={`text-base ${
                  pathname == "/depannage" ? "active" : ""
                } hover:text-leconte-gray`}
                href="/depannage"
              >
                Dépannage
              </Link>
            </li>

            <li>
              <Link
                className={`text-base ${
                  pathname == "/renovation" ? "active" : ""
                } hover:text-leconte-gray`}
                href="/renovation"
              >
                Rénovation
              </Link>
            </li>

            <li>
              <Link
                className={`text-base ${
                  pathname == "/about" ? "active" : ""
                } hover:text-leconte-gray`}
                href="/about"
              >
                A Propos
              </Link>
            </li>

            <li>
              <Link
                className={`text-base ${
                  pathname == "/contact" ? "active" : ""
                } hover:text-leconte-gray`}
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
