import Icon from '@mdi/react';
import { FaComment } from 'react-icons/fa';
import { MdHelpCenter, MdInsights } from 'react-icons/md';
import { mdiWarehouse, mdiMagnify, mdiCalendarOutline, mdiAccountGroup, mdiTruck, mdiDomain } from '@mdi/js';

const CarRentIcons = () => (
  <div>
    <Icon path={mdiCalendarOutline} size={1} />
          <Icon path={mdiMagnify} size={1} />
          <Icon path={mdiWarehouse} size={1} />
          <p>Section 2</p>
          <Icon path={mdiDomain} size={1} />
          <Icon path={mdiAccountGroup} size={1} />
          <Icon path={mdiTruck} size={1} />
          <p>Section 3</p>
          <MdInsights />
          <MdHelpCenter />
          <FaComment />
  </div>
);

export default CarRentIcons;