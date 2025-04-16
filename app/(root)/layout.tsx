import Link from "next/link";
import Image from "next/image";
import React, { ReactNode } from "react";
import { isAunthenticated } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAunthenticated();

  if (!isUserAuthenticated) redirect("/sign-in");
  return (
    <div className="root-layout">
      <nav>
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={38} height={32}></Image>
          <h2 className="text-primary-100">PropWise</h2>
        </Link>
      </nav>
      {children}
    </div>
  );
};

export default RootLayout;
