import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import logo from '../../../assets/img/logo/logo.png';
import { Link } from 'react-router-dom';
import userImage from '../../../assets/img/logo/user.png';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'About', href: '/home#about', current: false },
  { name: 'Latest Models', href: '/home#models', current: false },
  { name: 'Explore', href: '/explore', current: false },
  { name: 'Reviews', href: '/home#reviews', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <Disclosure as="nav" className="bg-gray-900 sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src={logo}
                    alt="logo"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src={logo}
                    alt="logo"
                  />
                  <h2 className="font-bold text-2xl text-gray-200">Audi</h2>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <HashLink
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-indigo-500 text-white'
                            : 'text-gray-300 hover:bg-indigo-500 hover:text-white',
                          'px-6 py-2 rounded-3xl text-sm transition duration-500 hover:shadow-2xl'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </HashLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div className="flex">
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={user?.photoURL ? user.photoURL : userImage}
                        alt="user"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-2xl shadow-2xl p-4 bg-gray-900 ring-1 ring-indigo-500 ring-opacity-5 focus:outline-none transition text-center">
                      {user?.email ? (
                        <div>
                          <h3 className="mr-3 font-bold text-xl text-indigo-500">
                            {user?.displayName ? user.displayName : ''}
                          </h3>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/"
                                onClick={logOut}
                                className={classNames(
                                  active
                                    ? 'bg-indigo-500 text-gray-300 rounded-3xl'
                                    : '',
                                  'block px-4 py-2 text-sm text-gray-300 hover:text-white hover:shadow-2xl transition duration-500 rounded-3xl'
                                )}
                              >
                                Log Out
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/dashboard"
                                className={classNames(
                                  active
                                    ? 'bg-indigo-500 text-gray-300 rounded-3xl'
                                    : '',
                                  'block px-4 py-2 text-sm text-gray-300 hover:text-white hover:shadow-2xl transition duration-500 rounded-3xl'
                                )}
                              >
                                Dashboard
                              </Link>
                            )}
                          </Menu.Item>
                        </div>
                      ) : (
                        <div>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/login"
                                className={classNames(
                                  active
                                    ? 'bg-indigo-500 text-gray-300 rounded-3xl'
                                    : '',
                                  'block px-4 py-2 text-sm text-gray-300 hover:text-white hover:shadow-2xl transition duration-500 rounded-3xl'
                                )}
                              >
                                LogIn
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/register"
                                className={classNames(
                                  active
                                    ? 'bg-indigo-500 text-gray-300 rounded-3xl'
                                    : '',
                                  'block px-4 py-2 text-sm text-gray-300 hover:text-white transition hover:shadow-2xl  duration-500 rounded-3xl'
                                )}
                              >
                                Register
                              </Link>
                            )}
                          </Menu.Item>
                        </div>
                      )}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 text-center">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-gray-300'
                      : 'text-gray-300 hover:bg-indigo-500 hover:text-white',
                    'block px-3 py-2 rounded-3xl text-base font-medium transition duration-500'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
