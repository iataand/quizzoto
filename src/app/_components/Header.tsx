"use client";

import Link from "next/link";
import DashboardIcon from "../icons/incons";
import { usePathname } from "next/navigation";

const menuList = [
  {
    text: "Dashboard",
    icon: <DashboardIcon />,
    url: "/dashboard",
  },
  {
    text: "Create Test",
    icon: <DashboardIcon />,
    url: "/create-quizz",
  },
  {
    text: "Upload CSV",
    icon: <DashboardIcon />,
    url: "/upload-csv",
  },
  {
    text: "View Result",
    icon: <DashboardIcon />,
    url: "/view-results",
  },
];

export default function Header() {
  const path = usePathname();
  return (
    <div className="h-screen w-64 bg-blue-700 pt-12 text-white">
      <div className="mb-12 flex items-center gap-4  pl-12">
        <DashboardIcon />
        <div>
          <p>Preethilakshmi K</p>
          <p className="font-thin">Admin</p>
        </div>
      </div>
      <div className="flex flex-col">
        {menuList.map((menuItem) => (
          <Link
            data-testid={menuItem.url}
            key={menuItem.url}
            href={menuItem.url}
            className={`flex h-16 w-full items-center gap-2 p-2 pl-12 hover:bg-sky-700 ${path === menuItem.url ? "bg-sky-700" : ""}`}
          >
            {menuItem.icon}
            {menuItem.text}
          </Link>
        ))}
      </div>
    </div>
  );
}
