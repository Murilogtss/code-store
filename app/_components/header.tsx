"use client";

import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  PercentIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";

const Header = () => {
  const handleLogIn = async () => {
    await signIn("google");
  };

  const handleLogOut = async () => {
    await signOut();
  };

  const { data, status } = useSession();

  return (
    <Card className="flex p-[1.875rem] rounded-none justify-between items-center">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle className="text-left text-lg font-semibold">
              Menu
            </SheetTitle>
          </SheetHeader>

          {status == "authenticated" && data.user && (
            <>
              <div className="flex items-center gap-2 py-4">
                <Avatar>
                  <AvatarFallback>
                    {data.user.name?.charAt(0).toUpperCase()}
                  </AvatarFallback>
                  {data.user.image && <AvatarImage src={data.user.image} />}
                </Avatar>
                <div className="flex flex-col">
                  <p className="font-medium">{data.user.name}</p>
                  <span className="text-sm opacity-75">Boas compras!</span>
                </div>
              </div>
              <Separator />
            </>
          )}
          <div className="flex flex-col gap-2 mt-4">
            {status == "unauthenticated" ? (
              <Button
                variant="outline"
                className="w-full justify-start gap-2"
                onClick={handleLogIn}
              >
                <LogInIcon size={16} />
                Fazer Login
              </Button>
            ) : (
              <Button
                variant="outline"
                className="w-full justify-start gap-2"
                onClick={handleLogOut}
              >
                <LogOutIcon size={16} />
                Fazer Logout
              </Button>
            )}
            <Button variant="outline" className="w-full justify-start gap-2">
              <HomeIcon size={16} />
              Inicio
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2">
              <PercentIcon size={16} />
              Ofertas
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2">
              <ListOrderedIcon size={16} />
              Catálogo
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <h1 className="text-lg font-semibold">
        <span className="text-primary">CODE</span> Store
      </h1>

      <Button size="icon" variant="outline">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};

export default Header;
