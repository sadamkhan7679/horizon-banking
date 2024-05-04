import React from "react";
import Image from "next/image";
import Sidebar from "@/components/modules/Sidebar";
import MobileNav from "@/components/modules/Sidebar/MobileSidebar";
import { testUser } from "@/constants/mockData";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={testUser} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={testUser} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
