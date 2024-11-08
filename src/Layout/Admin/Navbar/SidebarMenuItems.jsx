import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { FaBlog, FaBox, FaReceipt, FaUser, FaCog } from 'react-icons/fa';
import { MdCategory, MdDashboard, MdFeedback, MdOutlineQueryStats, MdSubscriptions } from 'react-icons/md';


const SidebarMenuItems = ({ menuHover, collapsed }) => {
  const { pathname } = useLocation();

  const [activeMenu, setActiveMenu] = useState({ openSubmenus: {}, activeItem: null });

  const toggleMenu = (menuName) => {
    setActiveMenu((prev) => {
      const updatedOpenSubmenus = { ...prev.openSubmenus };
      // Check if the submenu is already open
      if (updatedOpenSubmenus[menuName] === menuName) {
        // If it's open, remove it to close the submenu
        delete updatedOpenSubmenus[menuName];
      } else {
        // If it's closed, add it to open the submenu
        updatedOpenSubmenus[menuName] = menuName;
      }
      return { ...prev, openSubmenus: updatedOpenSubmenus };
    });
  };

  useEffect(() => {
    let loc = pathname.split('/');
    const openSubmenusData = loc.length > 3
      ? loc.reduce((acc, item) => {
        if (item !== '') acc[item] = item;
        return acc;
      }, {})
      : {};
    setActiveMenu((prev) => ({
      ...prev,
      openSubmenus: openSubmenusData,
      activeItem: loc.length > 3 ? loc[1] : pathname
    }));
  }, [pathname]);

  const isMenuActive = (menuName) => !!activeMenu.openSubmenus[menuName];

  const renderMenuItem = () => (
    <>
      {<li
        className={`single-sidebar-menu ${activeMenu.activeItem === '/' ? 'menu-item-active' : ''}`}
        onClick={() => toggleMenu('/')}
      >
        <Link to="/" className="menu-link">
          <span className="menu-icon flex-grow-0">
            <MdDashboard size={collapsed && !menuHover ? 22 : 18} />
          </span>
          {<div className="text-box flex-grow font-bold text-base">
            Task One
          </div>}
        </Link>
      </li>}




      <li
        className={`single-sidebar-menu ${pathname === pathname.match('/task-second')?.['input'] ? 'menu-item-active' : ''
          }`}
        onClick={() => toggleMenu('/')}
      >
        <Link to="/task-second" className="menu-link">
          <span className="menu-icon flex-grow-0">
            <FaBox size={collapsed && !menuHover ? 22 : 18} />
          </span>
          <div className="text-box flex-grow font-bold text-base">
            Task Second
          </div>
        </Link>
      </li>

      <li
        className={`single-sidebar-menu ${pathname === pathname.match('/submissions')?.['input'] ? 'menu-item-active' : ''
          }`}
        onClick={() => toggleMenu('/')}
      >
        <Link to="/submissions" className="menu-link">
          <span className="menu-icon flex-grow-0">
            <FaBox size={collapsed && !menuHover ? 22 : 18} />
          </span>
          <div className="text-box flex-grow font-bold text-base">
            Submissions
          </div>
        </Link>
      </li>


    </>
  );
  return renderMenuItem();
};

export default SidebarMenuItems;
