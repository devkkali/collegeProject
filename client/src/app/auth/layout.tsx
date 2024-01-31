import React from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={
        "h-screen backdrop-blur-sm  bg-no-repeat bg-cover bg-[url('/login-bg.png')]"
      }
    >
      {children}
    </div>
  );
}
