import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { navLinks } from "./navlinks";
import Link from "next/link";

type MobileSidebarProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const MobileSidebar = ({ isOpen, setIsOpen }: MobileSidebarProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent>
        <SheetHeader className="flex items-start">
          <SheetTitle>Buildex</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-[40px] pt-[30px]">
          {navLinks.map((i, key) => {
            return (
              <Link
                href={i.path}
                key={key}
                className="capitalize text-text_color_alt hover:text-text_color transition-all"
              >
                {i.name}
              </Link>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
