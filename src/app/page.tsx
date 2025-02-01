'use client';

import Chat from './components/chat/Chat';
import Sidebar from './components/sidebar/Sidebar';
import './page.scss';
import Login from './components/login/Login';
import { useAppSelector } from '../lib/hooks';

export default function Home() {
  const user = useAppSelector((state) => state.user.user);

  console.log(user);
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
