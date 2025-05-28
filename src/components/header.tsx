"use client";

import Image from "next/image";
import Link from "next/link";

import logo from "../assets/LECONTE-MULTISERVICES-v2-removebg-preview.png";

import { useEffect } from "react";

export function Header() {
  // Burger menus
  useEffect(() => {
    const navlink = document.querySelectorAll("nav li a");

    if (navlink.length) {
      navlink.forEach((link) => {
        if (link.getAttribute("href") == document.location.pathname)
          link.classList.add("active");
        else link.classList.remove("active");

        link.addEventListener("click", () => {
          navlink.forEach((linkclick) => {
            linkclick.classList.remove("active");
          });
          link.classList.add("active");
        });
      });
    }

    //Side mobile
    const burger = document.querySelectorAll(".navbar-burger");
    const menu = document.querySelectorAll(".navbar-menu");

    if (burger.length && menu.length) {
      for (var i = 0; i < burger.length; i++) {
        burger[i].addEventListener("click", function () {
          for (var j = 0; j < menu.length; j++) {
            menu[j].classList.toggle("hidden");
          }
        });
      }
    }

    // close
    const close = document.querySelectorAll(".navbar-close");
    const backdrop = document.querySelectorAll(".navbar-backdrop");
    const mobilenavlink = document.querySelectorAll(".navbar-menu li a");

    if (close.length) {
      for (var i = 0; i < close.length; i++) {
        close[i].addEventListener("click", function () {
          for (var j = 0; j < menu.length; j++) {
            menu[j].classList.toggle("hidden");
          }
        });
      }
    }

    if (navlink.length) {
      for (var i = 0; i < mobilenavlink.length; i++) {
        mobilenavlink[i].addEventListener("click", function () {
          for (var j = 0; j < menu.length; j++) {
            menu[j].classList.toggle("hidden");
          }
        });
      }
    }

    if (backdrop.length) {
      for (var i = 0; i < backdrop.length; i++) {
        backdrop[i].addEventListener("click", function () {
          for (var j = 0; j < menu.length; j++) {
            menu[j].classList.toggle("hidden");
          }
        });
      }
    }
  });

  return (
    <header className="sticky top-0 h-auto w-screen z-3 px-4 py-4 bg-leconte-primary">
      <nav className="flex items-center">
        <Link
          className="text-xl flex gap-4 items-center font-bold leading-none w-1/2"
          href="/"
        >
          <Image src={logo} alt="logo" className="w-[50px] h-[50px]" />
          <span>Leconte Multiservices</span>
        </Link>
        <div className="w-1/2 px-4 flex justify-end">
          <div className="lg:hidden">
            <button className="navbar-burger flex items-center text-red-300 p-3">
              <svg
                className="block h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
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
              <Link className="text-base  hover:text-leconte-gray" href="about">
                A Propos
              </Link>
            </li>

            <li>
              <Link
                className="text-base  hover:text-leconte-gray"
                href="contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="navbar-menu relative z-50 hidden">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <Link className="mr-auto text-3xl font-bold leading-none" href="#">
              <Image src={logo} alt="logo" className="w-[50px] h-[50px]" />
            </Link>
            <button className="navbar-close">
              <svg
                className="h-6 w-6  cursor-pointer hover:text-leconte-gray"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <Link
                  className="block p-4 text-base font-semibold  hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="/"
                >
                  Accueil mobile
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-base font-semibold  hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="/services"
                >
                  Dépannage
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-base font-semibold  hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="/renov"
                >
                  Rénovation
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-base font-semibold  hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="about"
                >
                  A Propos
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-base font-semibold  hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
