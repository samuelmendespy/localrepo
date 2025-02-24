import { useState } from "react";

const UserDialog = ({ users }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={openDialog}
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-300"
      >
        Display Users
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg w-96 p-6 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Users
              </h2>
              <button
                onClick={closeDialog}
                className="text-gray-500 dark:text-white hover:text-gray-700"
              >
                &times;
              </button>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
              Currently displaying users
            </p>
            <div className="max-h-60 overflow-y-auto">
              <ul>
                {users.map((user) => (
                  <li
                    key={user.id}
                    className="flex justify-between items-center py-2 border-b dark:border-gray-700"
                  >
                    <span className="text-gray-800 dark:text-white">
                      {user.id}
                    </span>
                    <span className="text-gray-800 dark:text-white">
                      {user.name}
                    </span>
                    <span className="text-gray-800 dark:text-white">
                      ${user.salary.toLocaleString()}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserDialog;
