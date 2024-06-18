import { MenuIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const Header = () => {
  return (
    <Card className="flex p-[1.875rem] rounded-none justify-between items-center">
      <Button size="icon" variant="outline">
        <MenuIcon />
      </Button>

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
