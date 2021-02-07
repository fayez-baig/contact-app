import { useState, FC, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderProps } from './types';
import HaptikLogo from 'assets/img/logo.png';
import { SvgIcon } from 'app/domains/Common/components/svg-icon';

const Header: FC<HeaderProps> = ({ handleIsSidebarOpen }) => {
  // const history = useHistory();
  const twTheme = localStorage.getItem('twTheme');
  const [mode, setMode] = useState(twTheme || 'light');
  const htmlElement = document.querySelector('html')!;

  useEffect(() => {
    if (!localStorage.getItem('twTheme')) {
      htmlElement.classList.add('dark');
      localStorage.setItem('twTheme', 'dark');
      setMode('dark');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleDark = () => {
    if (localStorage.getItem('twTheme') === 'dark') {
      htmlElement.classList.remove('dark');
      localStorage.setItem('twTheme', 'light');
      setMode('light');
    } else {
      htmlElement.classList.add('dark');
      localStorage.setItem('twTheme', 'dark');
      setMode('dark');
    }
  };

  return (
    <header className="z-40 py-2 shadow-md lg:shadow-none shadow-bottom bg-light-mode dark:bg-dark-mode">
      <div className="container flex items-center justify-between h-full px-3 mx-auto text-theme-color-light dark:text-theme-color-dark">
        {/* <!-- Mobile hamburger --> */}
        <button
          onClick={handleIsSidebarOpen}
          className="p-1 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-green-200"
          aria-label="Menu"
        >
          <SvgIcon className="w-6 h-6" icon="MenuIcon" />
        </button>

        <div className="flex justify-center flex-1 h-12">
          <NavLink to="/home" className="block lg:hidden">
            <img
              loading="lazy"
              className="h-12 cursor-pointer lg:ml-0"
              src={HaptikLogo}
              alt="Haptik-Logo"
              width="133"
              height="40"
            />
          </NavLink>
        </div>
        <ul className="flex items-center flex-shrink-0 space-x-6">
          {/* <li className="relative text-theme-color-light dark:text-theme-color-dark">
            <button
              onClick={() => history.push('/search')}
              className="relative align-middle rounded-md focus:outline-none"
              aria-label="Notifications"
              aria-haspopup="true"
            >
              <SvgIcon className="w-5 h-5" icon="SearchIcon" />
            </button>
          </li> */}
          {/* <!-- Theme toggler --> */}
          <li className="relative text-theme-color-light dark:text-theme-color-dark">
            <button
              onClick={toggleDark}
              className="relative align-middle rounded-md focus:outline-none"
              aria-label="Notifications"
              aria-haspopup="true"
            >
              {mode === 'light' ? (
                <span className="w-5 h-5 mx-auto animate-spin">🌚</span>
              ) : (
                <span className="w-5 h-5 mx-auto animate-spin">💡</span>
              )}

              {/* <!-- Notification badge --> */}
              <span className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full animate-ping dark:border-gray-800" />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
