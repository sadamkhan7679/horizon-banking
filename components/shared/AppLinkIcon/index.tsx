import React from "react";
import Image from "next/image";
import Link from "next/link";

type AppLinkIconProps = {
  text?: boolean;
};

const AppLinkIcon: React.FC<AppLinkIconProps> = ({ text = true }) => {
  return (
    <Link href="/" className="cursor-pointer flex items-center gap-1">
      <Image src="/icons/logo.svg" width={34} height={34} alt="Horizon logo" />
      {text && (
        <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
          Horizon
        </h1>
      )}
    </Link>
  );
};

export default AppLinkIcon;
