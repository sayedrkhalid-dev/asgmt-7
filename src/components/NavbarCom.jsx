"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarCom() {
  const pathname = usePathname();

  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link} href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          <span className="font-bold">Keen</span>Keep
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink as={Link} href="/" active={pathname === "/"}>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="about" active={pathname === "/about"}>
          About
        </NavbarLink>
        <NavbarLink as={Link} href="timeline" active={pathname === "/timeline"}>
          Timeline
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
