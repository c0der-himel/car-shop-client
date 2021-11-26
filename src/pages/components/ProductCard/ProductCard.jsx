import { Link } from 'react-router-dom';

const ProductCard = (props) => {
  const { _id, name, img, price, description, series, model } = props.product;

  return (
    <div className="xl:w-1/3 md:w-1/2 p-4">
      <div className="bg-gray-800 bg-opacity-40 p-6 rounded-3xl border border-gray-800 hover:border-indigo-600 transition duration-500 relative">
        <img
          className="h-56 rounded-3xl w-full object-cover object-center mb-6"
          src={img}
          alt="car"
        />
        <h3 className="tracking-widest text-indigo-500 text-lg font-medium title-font">
          {name}
        </h3>
        <h3 className="tracking-widest text-white text-lg font-bold title-font absolute top-16 left-0 bg-indigo-500 px-4 py-1 rounded-tr-3xl rounded-br-3xl shadow-2xl">
          {model}
        </h3>
        <h2 className="text-2xl text-white font-bold title-font mb-4">
          {series} Series
        </h2>
        <p className="leading-relaxed text-base">
          {description.split(' ').slice(0, 30).toString().replace(/,/g, ' ')}
        </p>
        <div className="mt-5 flex justify-between items-center">
          <h2 className="text-2xl text-gray-300 font-bold title-font">
            <span className="text-indigo-500">$</span>
            {price}
          </h2>
          <Link
            to={`/purchase/${_id}`}
            className="inline-flex text-white bg-indigo-500 border-0 py-2 px-10 focus:outline-none hover:bg-indigo-600 rounded-3xl transition shadow-2xl duration-500 hover:shadow"
          >
            Purchase
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
