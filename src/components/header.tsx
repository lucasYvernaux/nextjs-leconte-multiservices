"use client";

import Image from "next/image";
import urlLogo from "../../public/images/logo/LECONTE_MULTISERVICES_small_logo.png";
import Link from "next/link";

import { useState } from "react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "./ui/collapsible";
import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  function ListItem({
    title,
    children,
    href,
    ...props
  }: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
      <li {...props}>
        <NavigationMenuLink asChild>
          <Link href={href}>
            <div className="flex flex-col gap-1 text-sm">
              <div className="leading-none font-medium">{title}</div>
              <div className="text-muted-foreground line-clamp-2">
                {children}
              </div>
            </div>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }

  return (
    <header
      className={`sticky top-0 h-28 w-full z-10 animate-scroll px-4 py-4 bg-leconte-primary ${
        pathname === "/realisation" ? "bg-transparent" : ""
      }`}
    >
      <nav className="flex w-full h-full items-center">
        <div className="nav-logo flex-1 h-full">
          <Link
            className="text-xl flex gap-4 items-center font-bold leading-none w-fit h-full"
            href="/"
            title="Retour à l'accueil"
          >
            <Image
              src={urlLogo}
              alt="logo Leconte Multiservices"
              title="logo Leconte Multiservices"
              className="h-full w-auto aspect-square"
            />
            <span>Leconte Multiservices</span>
          </Link>
        </div>
        <div className="me-4 flex-1 flex justify-end">
          <div className="sm:hidden">
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
                          src={urlLogo}
                          alt="logo Leconte Multiservices"
                          className="w-13"
                        />
                        <span>Leconte Multiservices</span>
                      </Link>
                      <CollapsibleTrigger className="flex justify-end">
                        <svg
                          className="h-6 w-6 cursor-pointer hover:text-leconte-gray"
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
                            ${pathname.includes("/realisation") ? "active" : ""}
                            hover:bg-blue-50 hover:text-blue-600"`}
                            href="/realisation"
                          >
                            Réalisations
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
          <NavigationMenu className="hidden sm:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  // className={navigationMenuTriggerStyle()}
                  className="text-lg font-medium hover:bg-transparent hover:text-white hover:underline hover:underline-offset-4 hover:decoration-3"
                >
                  <Link href="/">Accueil</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="left-5">
                    <ListItem href="/docs" title="Introduction"></ListItem>
                    <ListItem
                      href="/docs/installation"
                      title="Installation"
                    ></ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  // className={navigationMenuTriggerStyle()}
                  className="text-lg font-medium hover:bg-transparent hover:text-white hover:underline hover:underline-offset-4 hover:decoration-3"
                >
                  <Link href="/renovation">Rénovation</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>{" "}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  // className={navigationMenuTriggerStyle()}
                  className="text-lg font-medium hover:bg-transparent hover:text-white hover:underline hover:underline-offset-4 hover:decoration-3"
                >
                  <Link href="/realisation">Galerie</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>{" "}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  // className={navigationMenuTriggerStyle()}
                  className="text-lg font-medium hover:bg-transparent hover:text-white hover:underline hover:underline-offset-4 hover:decoration-3"
                >
                  <Link href="/about">A Propos</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>{" "}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  // className={navigationMenuTriggerStyle()}
                  className="text-lg font-medium hover:bg-transparent hover:text-white hover:underline hover:underline-offset-4 hover:decoration-3"
                >
                  <Link href="/contact">Contact</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>
    </header>
  );
}
