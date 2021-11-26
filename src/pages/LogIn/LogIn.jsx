import { LockClosedIcon } from '@heroicons/react/solid';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import logo from '../../assets/img/logo/logo.png';
import googleIcon from '../../assets/img/logo/google.png';
import { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const LogIn = () => {
  const { user, errors, signInUsingGoogle, signInUsingEmail } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const location = useLocation();
  const history = useHistory();
  const redirected_url = location.state?.from || '/home';

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLogIn = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError('Password should be at least 6 characters');
      return;
    }
    setError('');
    signInUsingEmail(email, password, history);
    // redirecting
    user ? history.push(redirected_url) : history.push('/login');
  };

  const handleGoogleLogIn = () => {
    signInUsingGoogle(history);
    // redirecting
    user ? history.push(redirected_url) : history.push('/login');
  };

  return (
    <>
      <Header />
      <div className="min-h-full flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-md w-full space-y-8 border border-gray-900 p-10 rounded-3xl transition duration-500 hover:border-indigo-500">
          <div>
            <img className="mx-auto h-12 w-auto" src={logo} alt="logo" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-300">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <Link
                to="/register"
                className="font-medium text-indigo-500 hover:text-indigo-400"
              >
                Create Account
              </Link>
            </p>
          </div>
          <form onSubmit={handleLogIn} className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  onBlur={handleEmail}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full bg-gray-800 bg-opacity-40 rounded-3xl border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-3"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  onBlur={handlePassword}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="w-full bg-gray-800 bg-opacity-40 rounded-3xl border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-3"
                  placeholder="Password"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-3xl text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-2xl hover:shadow transition duration-500 mt-10"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-400 group-hover:text-indigo-300"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
              <div className="flex items-center justify-center">
                <div className="w-12 h-0.5 bg-indigo-500 mt-4 mr-3"></div>
                <p className="text-gray-400 mt-4 text-center">
                  Or Use Google Sign In
                </p>
                <div className="w-12 h-0.5 bg-indigo-500 mt-4 ml-3"></div>
              </div>
              <button
                onClick={handleGoogleLogIn}
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-3xl text-white  hover:bg-indigo-600 shadow-2xl hover:shadow transition duration-500 mt-5 border-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <img className="h-5 ml-1" src={googleIcon} alt="google" />
                </span>
                Google Sign in
              </button>
            </div>
          </form>
          <div>
            {error ? (
              <p className="bg-red-300 text-gray-600 text-center rounded-3xl px-4 py-3">
                {error}
              </p>
            ) : (
              ''
            )}
            {errors ? (
              <p className="bg-red-300 text-gray-600 text-center rounded-3xl px-4 py-3">
                {errors}
              </p>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LogIn;
