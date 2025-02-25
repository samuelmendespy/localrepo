import { useState } from "react";
import { mdiAccountPlus } from "@mdi/js";

const ButtonAdd = ({ users }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <>
      <button
        type="button"
        className="flex items-center gap-2 bg-yellow-500 hover:bg-yell text-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-300"
      >
        <Icon path={mdiAccountPlus} size={1} />
        ADD USER
      </button>
    </>
  );
};

export { ButtonAdd };
