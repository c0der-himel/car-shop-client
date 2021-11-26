import About from '../components/About/About';
import Banner from '../components/Banner/Banner';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Products from '../components/Products/Products';
import Reviews from '../components/Reviews/Reviews';

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Products />
      <Reviews />
      <Footer />
    </>
  );
};

export default Home;
