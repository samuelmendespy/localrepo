"use client";
import "./../globals.css";
import SidebarLeft from "@/components/SidebarLeft";
import { useState } from "react";

export default function ManageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex h-screen">
      <SidebarLeft
        isCollapsed={isCollapsed}
        toggleSidebar={() => setIsCollapsed(!isCollapsed)}
      />
      <div className="flex-1 flex flex-col">
        <header>
          <h1>Next App</h1>
        </header>
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
