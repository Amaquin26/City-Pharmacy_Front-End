import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, Dropdown, DropdownTrigger, Avatar, DropdownMenu, DropdownItem, Badge} from "@nextui-org/react";
import {CompanyLogo} from "./CompanyLogo.tsx";
import NightModeSwtich from "./NightModeSwtich.tsx";
import { useDataContext } from '../api/context/DataContext.tsx'

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const {updateMode} = useDataContext(); 

  const menuItems = [
    {link: "/", name:"Dashboard"},
    {link: "/profile", name:"Profile"},
    {link: "/medicines", name:"Medicines"},
    {link: "/products", name:"Products"},
    {link: "/inventory", name:"Inventory"},
    {link: "/orders", name:"Orders"},
  ];

  const notLoggedInMenuItems = [
    {link: "/login", name: "Login"},
    {link: "/register", name: "Register"}
  ]

  const loggedInMenuItems = {link: '/logout', name:"Logout"}

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll isBordered>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link className="font-bold text-inherit" href="/">
            <CompanyLogo />
            <span className="ml-2">City Pharmacy</span>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Dashboard
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/products">
            Products
          </Link>
        </NavbarItem>
        <NavbarItem /* isActive */>
          <Link color="foreground" href="/medicines">
            Medicines
          </Link>
        </NavbarItem>
        <NavbarItem /* isActive */>
          <Link color="foreground" href="/inventory">
            Inventory
          </Link>
        </NavbarItem>
        <NavbarItem /* isActive */>
          <Link color="foreground" href="/orders">
            Orders
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/profile">
            Profile
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/register" variant="flat">
            Register
          </Button>
        </NavbarItem>

        <Dropdown placement="bottom-end" closeOnSelect={false}>
            <Badge content="" color="success" shape="circle" placement="bottom-right">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  color="primary"
                  name="Jason Hughes"
                  size="sm"
                  src="/profiles/brayl.png"
                />
              </DropdownTrigger>
            </Badge>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">brayljamesamaquin@example.com</p>
            </DropdownItem>
            <DropdownItem key="mode">
              <NightModeSwtich updateMode={updateMode}/>
            </DropdownItem>
            <DropdownItem key="settings">My Profile</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={`${item.name}`}>
            <Link
              color="primary"
              className="w-full"
              href={item.link}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        {notLoggedInMenuItems.map((item) => (
          <NavbarMenuItem key={`${item.name}`}>
            <Link
              color="primary"
              className="w-full"
              href={item.link}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
