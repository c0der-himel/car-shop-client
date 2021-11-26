import {
  createUserWithEmailAndPassword,
  getAuth,
  getIdToken,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initAuth from '../firebase/firebase.init';

initAuth();

const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);

  // adding displayName
  const addUsername = (username) => {
    updateProfile(auth.currentUser, {
      displayName: username,
    })
      .then(() => {
        setErrors('');
      })
      .catch((error) => {
        setErrors(error.message);
      });
  };

  // signup using email & password
  const signUpWithEmail = (username, email, password, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setErrors('');
        saveUser(email, username, 'POST');
        addUsername(username);
        history.replace('/');
      })
      .catch((error) => {
        console.log(error.message);
        setErrors(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // sign in using email & password
  const signInUsingEmail = (email, password, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setErrors('');
      })
      .catch((error) => {
        console.log(error.message);
        setErrors(error.message);
        history.replace('/login');
      })
      .finally(() => setIsLoading(false));
  };

  // sign up using google
  const signUpUsingGoogle = (history) => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        setErrors('');
        saveUser(result.user.email, result.user.displayName, 'PUT');
        console.log(result.user);
        history.replace('/');
      })
      .catch((error) => {
        console.log(error.message);
        setErrors(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // sign in using google
  const signInUsingGoogle = (history) => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        setErrors('');
        saveUser(result.user.email, result.user.displayName, 'PUT');
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
        setErrors(error.message);
        history.replace('/login');
      })
      .finally(() => setIsLoading(false));
  };

  // save user
  const saveUser = (email, displayName, methodName) => {
    const newUser = { email, displayName };
    fetch('https://powerful-garden-00570.herokuapp.com/users', {
      method: methodName,
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newUser),
    }).then();
  };

  // observer
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        getIdToken(user).then((idToken) =>
          localStorage.setItem('idToken', idToken)
        );
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  // admin check
  useEffect(() => {
    fetch(`https://powerful-garden-00570.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  // logout
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setErrors('');
      })
      .catch((error) => {
        setErrors(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    admin,
    errors,
    isLoading,
    setError: setErrors,
    signInUsingGoogle,
    signUpUsingGoogle,
    signUpWithEmail,
    signInUsingEmail,
    logOut,
  };
};

export default useFirebase;
