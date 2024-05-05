import React from "react";
import Image from "next/image";
import Sidebar from "@/components/modules/Sidebar";
import MobileNav from "@/components/modules/Sidebar/MobileSidebar";
import { testUser } from "@/constants/mockData";
import AppLinkIcon from "@/components/shared/AppLinkIcon";
import { getLoggedInUser } from "@/lib/auth/auth.actions";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedInUser = await getLoggedInUser();

  if (!loggedInUser) {
    redirect("/sign-in");
  }

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedInUser} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <AppLinkIcon text={false} />
          <div>
            <MobileNav user={loggedInUser} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
