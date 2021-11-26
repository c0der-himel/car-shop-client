import { Fragment, useState } from 'react';
import { Disclosure, Menu, Transition, Dialog } from '@headlessui/react';
import {
  XIcon,
  MenuAlt1Icon,
  CurrencyBangladeshiIcon,
  AnnotationIcon,
  ClipboardCheckIcon,
  ShieldCheckIcon,
  DocumentAddIcon,
  CogIcon,
} from '@heroicons/react/solid';
import logo from '../../assets/img/logo/logo.png';
import userImage from '../../assets/img/logo/user.png';
import useAuth from '../../hooks/useAuth';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import Payment from '../Payment/Payment';
import MyOrders from '../MyOrders/MyOrders';
import AddReview from '../AddReview/AddReview';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../../routes/AdminRoute/AdminRoute';
import DashboardWelcome from '../DashboardWelcome/DashboardWelcome';
import AllOrders from '../AllOrders/AllOrders';
import AddProduct from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Dashboard = () => {
  const { admin } = useAuth();
  const { user, logOut } = useAuth();
  const [open, setOpen] = useState(true);
  let { path, url } = useRouteMatch();

  return (
    <>
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
                      <MenuAlt1Icon
                        onClick={() => setOpen(true)}
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
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
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    onClick={() => setOpen(true)}
                    type="button"
                    className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">View notifications</span>
                    <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
                  </button>
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
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-2xl shadow-2xl p-4 bg-gray-800 ring-1 ring-indigo-500 ring-opacity-5 focus:outline-none transition text-center">
                        {user?.email ? (
                          <div>
                            <h3 className="mr-3 font-bold text-xl text-indigo-500">
                              {user?.displayName ? user.displayName : ''}
                            </h3>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/home"
                                  className={classNames(
                                    active
                                      ? 'bg-indigo-500 text-gray-300 rounded-3xl'
                                      : '',
                                    'block px-4 py-2 text-sm text-gray-300 hover:text-white hover:shadow-2xl transition duration-500 rounded-3xl'
                                  )}
                                >
                                  Home
                                </Link>
                              )}
                            </Menu.Item>
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
          </>
        )}
      </Disclosure>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-hidden z-50"
          onClose={setOpen}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
            <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="h-full flex flex-col py-6 bg-gray-900 shadow-xl overflow-y-scroll">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-2xl font-bold text-gray-300">
                        Dashboard
                      </Dialog.Title>
                    </div>
                    <div className="mt-6 relative flex-1 px-4 sm:px-6">
                      <div className="absolute inset-0 px-4 sm:px-6">
                        <div className="h-full" aria-hidden="true">
                          <nav className="flex flex-col text-base justify-start">
                            {!admin && (
                              <>
                                <Link
                                  to={`${url}/payment`}
                                  className="mr-5 text-gray-300 mb-3 transition duration-500 hover:text-white flex"
                                >
                                  <CurrencyBangladeshiIcon
                                    onClick={() => setOpen(true)}
                                    className="block h-6 w-6"
                                    aria-hidden="true"
                                  />{' '}
                                  <span className="ml-3">Payment</span>
                                </Link>
                                <Link
                                  to={`${url}/myorders`}
                                  className="mr-5 text-gray-300 mb-3 transition duration-500 hover:text-white flex"
                                >
                                  <ClipboardCheckIcon
                                    onClick={() => setOpen(true)}
                                    className="block h-6 w-6"
                                    aria-hidden="true"
                                  />{' '}
                                  <span className="ml-3">My Orders</span>
                                </Link>
                                <Link
                                  to={`${url}/review`}
                                  className="mr-5 text-gray-300 mb-3 transition duration-500 hover:text-white flex"
                                >
                                  <AnnotationIcon
                                    onClick={() => setOpen(true)}
                                    className="block h-6 w-6"
                                    aria-hidden="true"
                                  />{' '}
                                  <span className="ml-3">Add Review</span>
                                </Link>
                              </>
                            )}
                            {admin && (
                              <>
                                <Link
                                  to={`${url}/makeadmin`}
                                  className="mr-5 text-gray-300 mb-3 transition duration-500 hover:text-white flex"
                                >
                                  <ShieldCheckIcon
                                    onClick={() => setOpen(true)}
                                    className="block h-6 w-6"
                                    aria-hidden="true"
                                  />{' '}
                                  <span className="ml-3">Make Admin</span>
                                </Link>
                                <Link
                                  to={`${url}/orders`}
                                  className="mr-5 text-gray-300 mb-3 transition duration-500 hover:text-white flex"
                                >
                                  <ClipboardCheckIcon
                                    onClick={() => setOpen(true)}
                                    className="block h-6 w-6"
                                    aria-hidden="true"
                                  />{' '}
                                  <span className="ml-3">
                                    Manage All Orders
                                  </span>
                                </Link>
                                <Link
                                  to={`${url}/products`}
                                  className="mr-5 text-gray-300 mb-3 transition duration-500 hover:text-white flex"
                                >
                                  <DocumentAddIcon
                                    onClick={() => setOpen(true)}
                                    className="block h-6 w-6"
                                    aria-hidden="true"
                                  />{' '}
                                  <span className="ml-3">Add A Product</span>
                                </Link>
                                <Link
                                  to={`${url}/manageproducts`}
                                  className="mr-5 text-gray-300 mb-3 transition duration-500 hover:text-white flex"
                                >
                                  <CogIcon
                                    onClick={() => setOpen(true)}
                                    className="block h-6 w-6"
                                    aria-hidden="true"
                                  />{' '}
                                  <span className="ml-3">Manage Products</span>
                                </Link>
                              </>
                            )}
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <Switch>
        <Route exact path={`${path}`}>
          <DashboardWelcome />
        </Route>
        <Route path={`${path}/myorders`}>
          <MyOrders />
        </Route>
        <Route path={`${path}/payment`}>
          <Payment />
        </Route>
        <Route path={`${path}/review`}>
          <AddReview />
        </Route>
        <AdminRoute path={`${path}/makeadmin`}>
          <MakeAdmin />
        </AdminRoute>
        <AdminRoute path={`${path}/orders`}>
          <AllOrders />
        </AdminRoute>
        <AdminRoute path={`${path}/products`}>
          <AddProduct />
        </AdminRoute>
        <AdminRoute path={`${path}/manageproducts`}>
          <ManageProducts />
        </AdminRoute>
      </Switch>
    </>
  );
};

export default Dashboard;
