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
          <p className={`${isCollapsed ? "hidden" : "block"}`}>
            Sidebar HEADER
          </p>
        </div>
        {/* Sidebar groups */}
        <div className="flex flex-col gap-4">
          <p className={`${isCollapsed ? "hidden" : "block"}`}>
            Sidebar CONTENT
          </p>
          {/* Sidebar groups */}
          <div className="flex flex-col gap-4">
            <Icon path={mdiTruck} size={1.5} />
            <Icon path={mdiAccountGroup} size={1.5} />
            <Icon path={mdiReceiptTextClock} size={1.5} />
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
