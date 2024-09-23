import Link from "next/link";
import { ReactNode } from "react";

const GlobalLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col mx-auto max-w-3xl min-h-screen px-5">
      <header className="text-red-500 text-xl py-3">
        <Link href={"/"}>ONEBITE CINEMA</Link>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default GlobalLayout;
