import Chat from './components/chat/Chat';
import Sidebar from './components/sidebar/Sidebar';
import './page.scss';

export default function Home() {
  return (
    <div className="page">
      <Sidebar />
      <Chat />
    </div>
  );
}
