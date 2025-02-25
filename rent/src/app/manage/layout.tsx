"use client";
import "./../globals.css";
import SidebarLeft from "@/components/SidebarLeft";
import { Icon } from "@mdi/react";
import { mdiMenuOpen } from "@mdi/js";
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
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={`p-2 rounded-md bg-dark hover:bg-gray-300 ${isCollapsed ? "block" : "hidden"}`}
          >
            <Icon path={mdiMenuOpen} size={1} />
          </button>
        </header>
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
