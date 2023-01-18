import React from "react";
import { Link, NavLink } from "react-router-dom";

import { FiX } from "react-icons/fi";
import { links } from "../../Data/data";

import { useStateContext } from "../../Contexts/ContextProvider";

const DocSidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <>
      <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
        {activeMenu && (
          <>
            <div className="flex justify-between items-center">
              <Link
                to="/dashboard/"
                onClick={handleCloseSideBar}
                className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
              >
                <span>Dashboard</span>
              </Link>
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <FiX />
              </button>
            </div>
            <div className="mt-10">
              {links.map((item) => (
                <NavLink
                  to={`/${item.name}`}
                  key={item.name}
                  onClick={handleCloseSideBar}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  {item.icons}
                  <span className="capitalize">{item.name}</span>
                </NavLink>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default DocSidebar;
