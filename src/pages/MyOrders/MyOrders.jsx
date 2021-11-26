import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import MyOrderDetails from '../components/MyOrderDetails/MyOrderDetails';

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get(`https://powerful-garden-00570.herokuapp.com/orders/${user?.email}`)
      .then((res) => setOrders(res.data))
      .catch((err) => console.log(err));
  }, [user?.email]);

  const handleDeleteOrder = (id) => {
    axios
      .delete(`https://powerful-garden-00570.herokuapp.com/orders/${id}`)
      .then((res) => {
        const remainingOrders = orders.filter((order) => order._id !== id);
        setOrders(remainingOrders);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <section className="bg-gray-900 text-gray-300 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0 ml-10">
              <h1 className="sm:text-4xl text-3xl font-bold title-font mb-2 text-white">
                My Orders
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
          {orders.length === 0 ? (
            <div className="flex justify-center items-center my-24">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-500 relative"></div>
              <h3 className="text-3xl text-indigo-500 font-bold absolute">
                You have no orders
              </h3>
            </div>
          ) : (
            <div className="flex flex-col">
              <div className="overflow-hidden">
                <div className="pb-24 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow-2xl overflow-hidden border-b border-gray-200 rounded-2xl">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-800">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                          >
                            User Info
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                          >
                            Car Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                          >
                            Price
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                          >
                            Status
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-right text-xs font-medium text-gray-200 uppercase tracking-wider"
                          >
                            Action
                          </th>
                        </tr>
                      </thead>
                      {orders.map((order) => (
                        <MyOrderDetails
                          key={order._id}
                          order={order}
                          handleDeleteOrder={handleDeleteOrder}
                        />
                      ))}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default MyOrders;
