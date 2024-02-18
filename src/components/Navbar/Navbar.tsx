"use client";

import React from "react";
import NextImage from "next/image";

import {
  Navbar as NavbarNextUi,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Image,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  User,
} from "@nextui-org/react";
import FeatherIcon from "feather-icons-react";

interface NavbarProps {}

const Navbar = ({}: NavbarProps) => {
  return (
    <NavbarNextUi position="sticky" className="p-3 bg-green-900">
      <NavbarBrand>
        <Link href="/">
          <Image
            as={NextImage}
            width={70}
            height={70}
            src="/ligabazooka-logo.png"
            alt="LigaBazookaLogo"
          />
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-9" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/battlecats">
            Battlecats
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Tickets
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Batallas
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="">
          <Button as={Link} color="primary" href="#" variant="flat">
            Login
          </Button>
        </NavbarItem>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Button variant="bordered">Open Menu</Button>
            {/*  <FeatherIcon icon="menu" /> */}
          </DropdownTrigger>
          <DropdownMenu variant="flat">
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </NavbarNextUi>
  );
};

export default Navbar;
