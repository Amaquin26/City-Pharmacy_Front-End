import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import {CompanyLogo} from "./CompanyLogo.tsx";

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {link: "/", name:"Dashboard"},
    {link: "/profile", name:"Profile"},
    {link: "/medicines", name:"Medicines"},
    {link: "/products", name:"Products"},
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
          <CompanyLogo />
          <p className="font-bold text-inherit">City Pharmacy</p>
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
        <NavbarItem isActive>
          <Link href="/medicines">
            Medicines
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
