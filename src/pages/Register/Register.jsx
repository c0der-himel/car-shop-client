import { LockClosedIcon } from '@heroicons/react/solid';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import logo from '../../assets/img/logo/logo.png';
import { Link, useHistory } from 'react-router-dom';
import googleIcon from '../../assets/img/logo/google.png';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Register = () => {
  const { errors, signUpWithEmail, signUpUsingGoogle } = useAuth();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleUsername = (e) => setUsername(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleRegister = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError('Password should be at least 6 characters');
      return;
    }
    setError('');
    signUpWithEmail(username, email, password, history);
  };

  return (
    <>
      <Header />
      <div className="min-h-full flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-md w-full space-y-8 border border-gray-900 p-10 rounded-3xl transition duration-500 hover:border-indigo-500">
          <div>
            <img className="mx-auto h-12 w-auto" src={logo} alt="logo" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-300">
              Create your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <Link
                to="/login"
                className="font-medium text-indigo-500 hover:text-indigo-400"
              >
                Sign In
              </Link>
            </p>
          </div>
          <form onSubmit={handleRegister} className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  onBlur={handleUsername}
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="w-full bg-gray-800 bg-opacity-40 rounded-3xl border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-6"
                  placeholder="Username"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  onBlur={handleEmail}
                  id="email-address"
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
                Register
              </button>
              <div className="flex items-center justify-center">
                <div className="w-12 h-0.5 bg-indigo-500 mt-4 mr-3"></div>
                <p className="text-gray-400 mt-4 text-center">
                  Or Use Google Sign Up
                </p>
                <div className="w-12 h-0.5 bg-indigo-500 mt-4 ml-3"></div>
              </div>
              <button
                onClick={() => signUpUsingGoogle(history)}
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-3xl text-white  hover:bg-indigo-600 shadow-2xl hover:shadow transition duration-500 mt-5 border-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <img className="h-5 ml-1" src={googleIcon} alt="google" />
                </span>
                Google Sign Up
              </button>
            </div>
          </form>
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
      <Footer />
    </>
  );
};

export default Register;
