"use client";
import {HomeIcon,  Link,  LogInIcon,  LogOutIcon,  MenuIcon,  UserIcon,} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import {  Sheet,  SheetContent,  SheetHeader,  SheetTitle,  SheetTrigger,} from "./ui/sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import SideMenu from "./side-menu";


const Header = () => {


  return (
    <Card>
      <CardContent className="p-5 justify-between items-center flex flex-row">
        <Image
          src="/logo_jpbarber02.png"
          alt={"FSW Barber"}
          height={22}
          width={120}
        />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <MenuIcon size={16} />
            </Button>
          </SheetTrigger>
          <SheetContent className="p-0">
            <SideMenu />
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  );
};

export default Header;
