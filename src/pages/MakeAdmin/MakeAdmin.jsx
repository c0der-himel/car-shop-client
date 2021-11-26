import { useForm } from 'react-hook-form';
import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ShieldCheckIcon } from '@heroicons/react/outline';

const MakeAdmin = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  const onSubmit = (data) => {
    const email = { email: data.admin };
    fetch('https://powerful-garden-00570.herokuapp.com/users/admin', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(email),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        reset();
        setOpen(true);
      });
  };

  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font relative text-center">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Make Admin
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded mx-auto"></div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="admin"
                      className="leading-7 text-sm text-gray-400"
                    >
                      Admin Name
                    </label>
                    <input
                      {...register('admin', { required: true })}
                      type="email"
                      id="admin"
                      name="admin"
                      placeholder="Admin Email"
                      className="w-full bg-gray-800 bg-opacity-40 rounded-3xl border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-3"
                    />
                    {errors.admin?.type === 'required' && (
                      <div className="bg-red-200 text-gray-500 mt-3 text-center py-2 rounded-3xl">
                        Admin Email is required
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-2 w-full mt-5">
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-10 focus:outline-none hover:bg-indigo-600 rounded-3xl shadow-2xl hover:shadow transition duration-500 text-lg">
                    Make Admin
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
                            <div className="inline-block align-bottom bg-gray-700 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                              <div className="bg-gray-700 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-300 sm:mx-0 sm:h-10 sm:w-10">
                                    <ShieldCheckIcon
                                      className="h-8 w-8 text-indigo-500"
                                      aria-hidden="true"
                                    />
                                  </div>
                                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <Dialog.Title
                                      as="h3"
                                      className="text-2xl leading-6 font-bold text-indigo-500 mt-1"
                                    >
                                      Made Admin Successfully
                                    </Dialog.Title>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                  type="button"
                                  className="w-full inline-flex justify-center rounded-3xl shadow-2xl px-6 py-2 text-base font-medium text-red-500 border border-red-500 hover:bg-red-600 sm:ml-3 sm:w-auto sm:text-sm transition duration-500 hover:shadow hover:text-white"
                                  onClick={() => setOpen(false)}
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          </Transition.Child>
                        </div>
                      </Dialog>
                    </Transition.Root>
                  ) : null}
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default MakeAdmin;
