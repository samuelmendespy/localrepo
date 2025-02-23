import Icon from "@mdi/react";
import {
  mdiCar,
  mdiReceipt,
  mdiCalendar,
  mdiTag,
  mdiReceiptTextClock,
  mdiFileDocumentMultipleOutline,
} from "@mdi/js";

const CarRentIcons = () => (
  <div>
    <Icon path={mdiCar} size={1} color="black" />
    <Icon path={mdiReceipt} size={1} color="black" />
    <Icon path={mdiCalendar} size={1} color="black" />
    <Icon path={mdiTag} size={1} color="black" />
    <Icon path={mdiReceiptTextClock} size={1} color="black" />
    <Icon path={mdiFileDocumentMultipleOutline} size={1} color="black" />
  </div>
);

export default CarRentIcons;
