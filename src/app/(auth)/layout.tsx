import Image from "next/image";
import { FC } from "react";

import ButtonLinkToggler from "@/features/auth/components/button-toggler";

interface Props {
  children: React.ReactNode;
}

const AuthLayout: FC<Props> = ({ children }) => {
  return (
    <main className="min-h-dvh bg-secondary text-secondary-foreground">
      <div className="container">
        <nav className="flex items-center justify-between py-3">
          <div>
            <Image
              src={"/logo.svg"}
              alt="logo"
              width={152}
              height={50}
              className="h-full w-full select-none"
            />
          </div>
          <ButtonLinkToggler />
        </nav>
        <div className="flex flex-col items-center justify-center gap-4 pt-4 md:pt-8">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
