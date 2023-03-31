import React from 'react';

export default function NavbarComponent({ options }) {
  // function that will open or close the navbar depending if state is true or false
  const [navbarClose, setNavbarClose] = React.useState(false);

  // function that will take in argurments and update link references
  const { home, services, projects, about, blog, letsTalk } = options;

  return (
    <nav className="flex font-main flex-wrap items-center bg-white dark:bg-black pl-20 pr-20 pt-5 pb-5">
      <div className="container flex flex-wrap items-center">
        <div className="w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <div className="text-xl font-bold text-black dark:text-white">
            XFOLIO.
          </div>
          <button
            className="border-transparent lg:hidden outline-none focus:outline-none text-black"
            type="button"
            onClick={() => setNavbarClose(!navbarClose)}
          >
            <svg
              className="h-4 w-4 dark:bg-white"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={
            'lg:flex flex-grow items-center' +
            (navbarClose ? ' flex' : ' hidden')
          }
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li>
              <a
                className="px-2 py-2 flex items-center text-xs text-black dark:text-white hover:opacity-75"
                href={home}
              >
                <i className="text-lg leading-lg text-black dark:text-white opacity-75"></i>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a
                className="px-2 py-2 flex items-center text-xs text-black dark:text-white hover:opacity-75"
                href={services}
              >
                <i className="text-lg leading-lg text-black dark:text-white opacity-75"></i>
                <span>Services</span>
              </a>
            </li>
            <li>
              <a
                className="px-2 py-2 flex items-center text-xs text-black dark:text-white hover:opacity-75"
                href={projects}
              >
                <i className="text-lg leading-lg text-black dark:text-white opacity-75"></i>
                <span>Projects</span>
              </a>
            </li>
            <li>
              <a
                className="px-2 py-2 flex items-center text-xs text-black dark:text-white hover:opacity-75"
                href={about}
              >
                <i className=" text-lg leading-lg text-black dark:text-white opacity-75"></i>
                <span>About</span>
              </a>
            </li>
            <li>
              <a
                className="px-2 py-2 flex items-center text-xs text-black dark:text-white hover:opacity-75"
                href={blog}
              >
                <i className="text-lg leading-lg text-black dark:text-white opacity-75"></i>
                <span>Blog</span>
              </a>
            </li>
            <div>
              <a
                className="inline-block text-sm px-4 py-2 leading-none border rounded-full text-white dark:text-black dark:bg-white bg-black mt-4 lg:mt-0"
                href={letsTalk}
              >
                <i className="text-md leading-md text-black dark:text-white opacity-75"></i>
                <span>LET'S TALK</span>
              </a>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}
