"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import {
  ChartLineUp,
  Clock,
  Home as HomeOuline,
} from "flowbite-react-icons/outline";
import { Home as HomeSolid } from "flowbite-react-icons/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarCom() {
  const pathname = usePathname();

  return (
    <Navbar fluid className="py-5">
      <NavbarBrand as={Link} href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          <span className="font-bold">Keen</span>Keep
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink
          as={Link}
          href="/"
          active={pathname === "/"}
          className="flex items-center gap-2"
        >
          {pathname === "/" ? <HomeSolid /> : <HomeOuline />}
          Home
        </NavbarLink>

        <NavbarLink
          as={Link}
          href="timeline"
          active={pathname === "/timeline"}
          className="flex items-center gap-2"
        >
          <Clock />
          Timeline
        </NavbarLink>

        <NavbarLink
          as={Link}
          href="/stats"
          active={pathname === "/stats"}
          className="flex items-center gap-2"
        >
          <ChartLineUp />
          Stats
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
