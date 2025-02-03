'use client';

import Chat from './components/chat/Chat';
import Sidebar from './components/sidebar/Sidebar';
import './page.scss';
import Login from './components/login/Login';
import { useAppDispatch, useAppSelector } from '../lib/hooks';
import { useEffect } from 'react';
import { auth } from './firebase';
import { login, logout } from '@/lib/features/userSlice';

export default function Home() {
  const user = useAppSelector((state) => state.user.user);

  // console.log(user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      // console.log(loginUser);
      if (loginUser) {
        dispatch(
          login({
            uid: loginUser.uid,
            photo: loginUser.photoURL,
            email: loginUser.email,
            displayName: loginUser.displayName,
          }),
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="page">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
}
