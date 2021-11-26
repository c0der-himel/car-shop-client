import { useHistory } from 'react-router-dom';
import errorImage from '../../assets/img/pagenotfound/error.svg';

const PageNotFound = () => {
  const history = useHistory();

  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src={errorImage}
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            !!! 404 Page not found !!!
          </h1>
          <p className="leading-relaxed mb-8">
            The page you are looking doesn't exist
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => history.push('/')}
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
