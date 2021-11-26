import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ShieldCheckIcon } from '@heroicons/react/outline';
import { HashLink } from 'react-router-hash-link';

const AddProduct = () => {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post('https://powerful-garden-00570.herokuapp.com/products', {
        name: 'Audi',
        model: data.model,
        series: data.series,
        price: data.price,
        description: data.description,
        img: data.img,
      })
      .then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          setOpen(true);
          reset();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font relative text-center">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Add Car
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded mx-auto"></div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="model"
                      className="leading-7 text-sm text-gray-400"
                    >
                      Model
                    </label>
                    <input
                      {...register('model', {
                        required: true,
                      })}
                      type="text"
                      id="model"
                      name="model"
                      placeholder="Model Name"
                      className="w-full bg-gray-800 bg-opacity-40 rounded-3xl border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-3"
                    />
                    {errors.model?.type === 'required' && (
                      <div className="bg-red-200 text-gray-500 mt-3 text-center py-2 rounded-3xl">
                        Model is required
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="series"
                      className="leading-7 text-sm text-gray-400"
                    >
                      Series
                    </label>
                    <input
                      {...register('series', {
                        required: true,
                      })}
                      type="text"
                      id="series"
                      name="series"
                      placeholder="Series Name"
                      className="w-full bg-gray-800 bg-opacity-40 rounded-3xl border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-3"
                    />
                    {errors.series?.type === 'required' && (
                      <div className="bg-red-200 text-gray-500 mt-3 text-center py-2 rounded-3xl">
                        Series is required
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="price"
                      className="leading-7 text-sm text-gray-400"
                    >
                      Price
                    </label>
                    <input
                      {...register('price', {
                        required: true,
                      })}
                      type="number"
                      id="price"
                      name="price"
                      placeholder="Price"
                      className="w-full bg-gray-800 bg-opacity-40 rounded-3xl border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-3"
                    />
                    {errors.price?.type === 'required' && (
                      <div className="bg-red-200 text-gray-500 mt-3 text-center py-2 rounded-3xl">
                        Price is required
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="img"
                      className="leading-7 text-sm text-gray-400"
                    >
                      Image Link
                    </label>
                    <input
                      {...register('img', {
                        required: true,
                      })}
                      type="text"
                      id="img"
                      name="img"
                      placeholder="Image Link"
                      className="w-full bg-gray-800 bg-opacity-40 rounded-3xl border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-3"
                    />
                    {errors.img?.type === 'required' && (
                      <div className="bg-red-200 text-gray-500 mt-3 text-center py-2 rounded-3xl">
                        Image Link is required
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="description"
                      className="leading-7 text-sm text-gray-400"
                    >
                      Description
                    </label>
                    <textarea
                      {...register('description', { required: true })}
                      id="description"
                      name="description"
                      placeholder="Description"
                      className="w-full bg-gray-800 bg-opacity-40 rounded-3xl border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-40 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                    {errors.description?.type === 'required' && (
                      <div className="bg-red-200 text-gray-500 mt-3 text-center py-2 rounded-3xl">
                        Description is required
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-2 w-full mt-5">
                  <button
                    type="submit"
                    className="inline-flex text-white bg-indigo-500 border-0 py-2 px-10 focus:outline-none hover:bg-indigo-600 rounded-3xl shadow-2xl hover:shadow transition duration-500 text-lg"
                  >
                    Add Car
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
                                      Car Added Successfully
                                    </Dialog.Title>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <HashLink
                                  to="/explore"
                                  className="w-full inline-flex justify-center rounded-3xl shadow-2xl border border-transparent px-6 py-2 bg-indigo-500 text-base font-medium text-white hover:bg-indigo-600 sm:ml-3 sm:w-auto sm:text-sm transition duration-500 hover:shadow"
                                >
                                  Explore
                                </HashLink>
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

export default AddProduct;
