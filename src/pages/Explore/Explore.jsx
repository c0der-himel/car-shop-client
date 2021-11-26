import axios from 'axios';
import { useEffect, useState } from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import ProductCard from '../components/ProductCard/ProductCard';

const Explore = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://powerful-garden-00570.herokuapp.com/products')
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header />
      <section id="models" className="text-gray-400 body-font bg-gray-900">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-white">
                Explore Our Latest Models
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {products.length === 0 ? (
              <div className="flex justify-center items-center my-24 mx-auto">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-500"></div>
              </div>
            ) : (
              <div className="flex flex-wrap -m-4">
                {products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Explore;
