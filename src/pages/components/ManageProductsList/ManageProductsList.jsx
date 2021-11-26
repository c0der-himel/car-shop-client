import { Dialog, Transition } from '@headlessui/react';
import { ShieldCheckIcon } from '@heroicons/react/outline';
import { Fragment, useRef, useState } from 'react';

const ManageProductsList = ({ order, handleDeleteOrder }) => {
  const { _id, price, series, name, model, img } = order;

  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  return (
    <tbody className="bg-gray-900 divide-y divide-gray-700">
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
              <img
                className="h-10 w-10 rounded-full"
                src={img}
                alt="userPhoto"
              />
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-400">{name}</div>
              {/* <div className="text-sm text-gray-400">{userEmail}</div> */}
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-400">{model}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
          {series}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">${price}</td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <button
            onClick={() => setOpen(true)}
            className="text-red-400 hover:text-red-600 transition duration-500"
          >
            Remove Car
          </button>
          {/* modal popup */}
          {open ? (
            <Transition.Root show={open} as={Fragment}>
              <Dialog
                as="div"
                className="fixed z-10 inset-0 overflow-y-auto"
                initialFocus={cancelButtonRef}
                onClose={setOpen}
              >
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                  </Transition.Child>
                  <span
                    className="hidden sm:inline-block sm:align-middle sm:h-screen"
                    aria-hidden="true"
                  >
                    &#8203;
                  </span>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                    <div className="inline-block align-bottom bg-white rounded-3xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                      <div className="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                          <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                            <ShieldCheckIcon
                              className="h-8 w-8 text-red-400"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <Dialog.Title
                              as="h3"
                              className="text-2xl leading-6 font-bold text-red-400 mt-1"
                            >
                              Sure, want to remove the car ?
                            </Dialog.Title>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-800 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button
                          onClick={() => handleDeleteOrder(_id)}
                          className="w-full inline-flex justify-center rounded-3xl shadow-2xl border border-transparent px-6 py-2 bg-indigo-500 text-base font-medium text-white hover:bg-indigo-600 sm:ml-3 sm:w-auto sm:text-sm transition duration-500 hover:shadow"
                        >
                          Yes
                        </button>
                        <button
                          type="button"
                          className="w-full inline-flex justify-center rounded-3xl shadow-2xl px-6 py-2 text-base font-medium text-red-500 border border-red-500 hover:bg-red-400 sm:ml-3 sm:w-auto sm:text-sm transition duration-500 hover:shadow hover:text-white"
                          onClick={() => setOpen(false)}
                        >
                          No
                        </button>
                      </div>
                    </div>
                  </Transition.Child>
                </div>
              </Dialog>
            </Transition.Root>
          ) : null}
        </td>
      </tr>
    </tbody>
  );
};

export default ManageProductsList;
