import aboutImage from '../../../assets/img/about/about.jpg';
import { HashLink } from 'react-router-hash-link';

const About = () => {
  return (
    <section id="about" className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-5 pt-48 pb-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={aboutImage}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Before they sold out
            <br className="hidden lg:inline-block" />
            get yours
          </h1>
          <p className="mb-8 leading-relaxed">
            Discover Audi as a brand, company and employer on our international
            website. Here you will find information about models and
            technologies. Inspiring content, interesting backgrounds and
            fascinating moments – digital, individual and authentic. Experience
            our vision of mobility and let yourself be inspired.
          </p>
          <div className="flex justify-center">
            <HashLink
              to="/home#models"
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-10 focus:outline-none hover:bg-indigo-600 text-lg rounded-3xl shadow-2xl hover:shadow transition duration-500"
            >
              Latest Models
            </HashLink>
            <HashLink
              to="/explore"
              className="ml-4 inline-flex text-gray-400 bg-gray-700 border-0 py-2 px-10 focus:outline-none hover:bg-gray-600 hover:text-white text-lg rounded-3xl shadow-2xl hover:shadow transition duration-500"
            >
              Explore
            </HashLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
