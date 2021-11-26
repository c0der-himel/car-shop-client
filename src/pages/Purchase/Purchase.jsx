import { Fragment, useEffect, useRef, useState } from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { Dialog, Transition } from '@headlessui/react';
import { ShieldCheckIcon } from '@heroicons/react/outline';

const Purchase = () => {
  const { user } = useAuth();
  const [product, setProduct] = useState({});
  const { id } = useParams();
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
      .post('https://powerful-garden-00570.herokuapp.com/orders', {
        quantity: data.people,
        address: data.address,
        userName: user.displayName,
        userEmail: user.email,
        userPhoto: user.photoURL,
        price: product.price,
        name: product.name,
        model: product.model,
        status: 'pending',
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

  useEffect(() => {
    axios
      .get(`https://powerful-garden-00570.herokuapp.com/purchase/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <Header />
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-3/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-3xl"
            alt="car"
            src={product.img}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              {product.name} {product.model}
            </h1>
            <h2 className="title-font sm:text-2xl text-xl mb-4 font-medium text-white">
              <span className="text-indigo-500">$</span>
              {product.price}
            </h2>
            <p className="leading-relaxed mb-8">{product.description}</p>
            <div className="flex justify-between w-4/5 mx-auto mb-8">
              <h3 className="text-lg font-bold">Name: {user.displayName}</h3>
              <h3 className="text-lg font-bold">Email: {user.email}</h3>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="quantity"
                      className="leading-7 text-sm text-gray-400"
                    >
                      Quantity
                    </label>
                    <input
                      {...register('quantity', { required: true })}
                      type="number"
                      id="quantity"
                      name="quantity"
                      className="w-full bg-gray-800 bg-opacity-40 rounded-3xl border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    {errors.quantity?.type === 'required' && (
                      <div className="bg-red-200 text-gray-500 mt-3 text-center py-2 rounded-3xl">
                        Quantity is required
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="phone"
                      className="leading-7 text-sm text-gray-400"
                    >
                      Phone Number
                    </label>
                    <input
                      {...register('phone', { required: true })}
                      type="number"
                      id="phone"
                      name="phone"
                      className="w-full bg-gray-800 bg-opacity-40 rounded-3xl border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    {errors.phone?.type === 'required' && (
                      <div className="bg-red-200 text-gray-500 mt-3 text-center py-2 rounded-3xl">
                        Phone Number is required
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="address"
                      className="leading-7 text-sm text-gray-400"
                    >
                      Address
                    </label>
                    <textarea
                      {...register('address', { required: true })}
                      id="address"
                      name="address"
                      className="w-full bg-gray-800 bg-opacity-40 rounded-3xl border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-40 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                    {errors.address?.type === 'required' && (
                      <div className="bg-red-200 text-gray-500 mt-3 text-center py-2 rounded-3xl">
                        Address is required
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-10">
                <button
                  type="submit"
                  className="inline-flex text-white bg-indigo-500 border-0 py-2 px-10 focus:outline-none hover:bg-indigo-600 rounded-3xl shadow-2xl hover:shadow transition duration-500 text-lg"
                >
                  Purchase
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
                                    Order Placed Successfully
                                  </Dialog.Title>
                                </div>
                              </div>
                            </div>
                            <div className="bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                              <Link
                                to="/dashboard/myorders"
                                className="w-full inline-flex justify-center rounded-3xl shadow-2xl border border-transparent px-6 py-2 bg-indigo-500 text-base font-medium text-white hover:bg-indigo-600 sm:ml-3 sm:w-auto sm:text-sm transition duration-500 hover:shadow"
                              >
                                My Orders
                              </Link>
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
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Purchase;
