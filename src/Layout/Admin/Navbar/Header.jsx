import { RiMenuFoldLine, RiMenuUnfoldLine } from 'react-icons/ri';
import { BiMenuAltRight } from 'react-icons/bi';

import useWidth from '../../../ThemeConfig/userWidth';

const Header = ({ className, menuCollapsed, setMenuCollapsed, mobileMenu, setMobileMenu }) => {

  const { width, breakpoints } = useWidth();

  return (
    <header className={className + ' ' + 'sticky top-0'}>
      <div className="md:px-6 px-[15px] bg-white py-3  md:mx-0 mx-0 text-black-500 border-b border-gray-400">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center md:space-x-4 space-x-2">
            {width >= breakpoints.lg && (
              <button type="button" className="text-xl hidden text-black lg:block" onClick={() => setMenuCollapsed(!menuCollapsed)}>
                {menuCollapsed
                  ? (<RiMenuUnfoldLine size={34} />)
                  : (<RiMenuFoldLine size={34} />)}
              </button>
            )}
            {width < breakpoints.lg && (
              <div className="cursor-pointer text-2xl" onClick={() => setMobileMenu(!mobileMenu)}>
                <BiMenuAltRight />
              </div>
            )}
          </div>

          <div className="nav-tools flex items-center lg:space-x-6 space-x-3">
            <div className="relative inline-block ">
              <div className="block w-full">
                <div className="label-class-custom">
                  <button type="button" className="p-0 m-0">
                    <div className="flex items-center gap-2">
                      <div className="flex-none text-sm font-normal items-center lg:flex hidden overflow-hidden text-ellipsis whitespace-nowrap text-black">
                        <span className="overflow-hidden text-ellipsis w-fit block font-bold">
                          User Name
                        </span>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
