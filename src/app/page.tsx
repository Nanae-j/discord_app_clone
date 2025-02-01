import { useSelector } from 'react-redux';
import Chat from './components/chat/Chat';
import Sidebar from './components/sidebar/Sidebar';
import './page.scss';
import Login from './components/login/Login';

export default function Home() {
  // const user = useSelector((state) => state.user.user);
  const user = null;
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
