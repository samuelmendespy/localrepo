import Icon from "@mdi/react";
import { mdiAccountGroup, mdiTruck, mdiReceiptTextClock } from "@mdi/js";

const CarRentIcons = () => (
  <div className="sb-component">
    <div className="sb-header">
      <p>Sidebar HEADER</p>
    </div>
    <div className="sb-content">
      <p>Sidebar CONTENT</p>
      <div className="sb-groups">
        <Icon path={mdiTruck} size={1} />
        <Icon path={mdiAccountGroup} size={1} />
        <Icon path={mdiReceiptTextClock} size={1} />
      </div>
    </div>
    <div className="sb-footer">
      <p>Sidebar FOOTER</p>
    </div>
  </div>
);

export default CarRentIcons;
