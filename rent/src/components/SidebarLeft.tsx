import Link from "next/link";
import Image from "next/image";
import { Icon } from "@mdi/react";
import {
  mdiTruck,
  mdiAccountGroup,
  mdiReceiptTextClock,
  mdiChevronDown,
  mdiMenuClose,
} from "@mdi/js";

const handleClick = () => {
  console.log("Hello World");
};

const sidebartItems = [
  {
    icon: <Icon path={mdiTruck} size={1} />,
    label: "Trucks",
    href: "/manage/car",
  },
  {
    icon: <Icon path={mdiAccountGroup} size={1} />,
    label: "Drivers",
    href: "/manage/renter",
  },
  {
    icon: <Icon path={mdiReceiptTextClock} size={1} />,
    label: "Rentals",
    href: "/manage/rental",
  },
  {
    icon: <Icon path={mdiReceiptTextClock} size={1} />,
    label: "Evento",
    href: "/manage/event",
  },
];

type SidebarProps = {
  isCollapsed: boolean;
  toggleSidebar: () => void;
};

const SidebarLeft: React.FC<SidebarProps> = ({
  isCollapsed,
  toggleSidebar,
}) => {
  return (
    <div
      className={`bg-gray-800 text-white h-screen transition-all duration-300 p-4 pl-0 pr-0 flex flex-col justify-between ${isCollapsed ? "hidden" : "w-64"}`}
    >
      <div>
        <button
          onClick={toggleSidebar}
          className="absolute top-1 left-1 z-50 p-2 bg-gray-800 text-white rounded-full shadow-lg focus:outline-none"
        >
          <Icon path={mdiMenuClose} size={1} />
        </button>
        <div className="mb-4">
          <div>
            <div className="flex justify-center mb-4">
              <Image
                className="dark:invert"
                src="/mark.svg"
                alt="mark"
                width={180}
                height={38}
                priority
              />
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-2">
                <span className="whitespace-nowrap">DEMO ACCOUNT</span>
                <button
                  onClick={handleClick}
                  className="flex items-center text-white rounded-lg shadow-md hover:bg-blue-600"
                >
                  <Icon path={mdiChevronDown} size={1} className="" />
                </button>
              </div>
              <div className="flex justify-center">
                <p>Owner</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-t border-gray-300 mb-4" />
        {/* Sidebar content */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            {sidebartItems.map((item, index) => (
              <div key={index} className="link-group flex flex-col">
                <Link href={item.href}>
                  <div className="flex flex-row items-center shadow-lg p-2 pl-4">
                    <div className="mr-2">{item.icon}</div>
                    <span>{item.label}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pt-20">
        <hr className="border-t border-gray-300" />
      </div>

      <div className="mb-2 ml-2">
        <p className="items-center">Assigner v0.0.1</p>
      </div>
    </div>
  );
};

export default SidebarLeft;
