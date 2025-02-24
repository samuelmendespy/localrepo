import Link from "next/link";
import { Icon } from "@mdi/react";
import {
  mdiTruck,
  mdiAccountGroup,
  mdiReceiptTextClock,
  mdiMenu,
} from "@mdi/js";

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
      className={`bg-gray-800 text-white h-screen transition-all duration-300 p-4 flex flex-col justify-between ${isCollapsed ? "w-16" : "w-64"}`}
    >
      <div>
        <button
          onClick={toggleSidebar}
          className="mb-4 text-white focus:outline-none"
        >
          <Icon path={mdiMenu} size={1} />
        </button>
        {/* Sidebar header */}
        <div className="mb-4">
          <p className={`${isCollapsed ? "hidden" : "block"}`}></p>
          <div className={`${isCollapsed ? "hidden" : "block"}`}>
            <div>
              <p className="mb-4">APP LOGO HERE</p>
            </div>
            <p>TEST ACCOUNT ↓</p>
            <p>Owner</p>
          </div>
        </div>
        {/* Sidebar groups */}
        <div className="flex flex-col gap-4">
          <p className={`${isCollapsed ? "hidden" : "block"}`}>
            Sidebar CONTENT
          </p>
          {/* Sidebar icons group */}
          <div
            className={`flex flex-col gap-4 ${isCollapsed ? "hidden" : "block"}`}
          >
            <div className="link-group flex flex-col gap-4">
              <Link href="/manage/car">
                <div className="flex flex-row items-center w-40 rounded-2xl shadow-lg p-2">
                  <div className="mb-2">
                    <Icon path={mdiTruck} size={1.5} />
                  </div>
                  <span>Manage Car</span>
                </div>
              </Link>
            </div>
            <div className="link-group flex flex-col gap-4">
              <Link href="/manage/renter">
                <div className="flex flex-row items-center w-40 rounded-2xl shadow-lg p-2">
                  <div className="mb-2">
                    <Icon path={mdiAccountGroup} size={1.5} />
                  </div>
                  <span>Manage Car Renters</span>
                </div>
              </Link>
            </div>
            <div className="link-group flex flex-col gap-4">
              <Link href="/manage/rental">
                <div className="flex flex-row items-center w-40 rounded-2xl shadow-lg p-2">
                  <div className="mb-2">
                    <Icon path={mdiReceiptTextClock} size={1.5} />
                  </div>
                  <span>Manage Rentals</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Sidebar footer */}
      <div className="mb-4">
        <p className={`${isCollapsed ? "hidden" : "block"}`}>Sidebar FOOTER</p>
      </div>
    </div>
  );
};

export default SidebarLeft;
