"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

const ButtonLinkToggler = () => {
  const pathname = usePathname();
  return (
    <Button variant={"outline"} asChild>
      <Link href={pathname === "/sign-in" ? "/sign-up" : "/sign-in"}>
        {pathname === "/sign-in" ? "Sign up" : "Sign in"}
      </Link>
    </Button>
  );
};

export default ButtonLinkToggler;
