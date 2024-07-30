import { auth } from '../config/firebase-config';
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { useState } from 'react';

export const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(auth.currentUser?.email);

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  //   const signIn = async () => {
  //   try {
  //     await signInWithEmailAndPassword(auth, email, password);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <input
        placeholder="Email..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password..."
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signUp}>Sign Up</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
