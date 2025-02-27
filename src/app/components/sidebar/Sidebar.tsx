import './Sidebar.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import MicIcon from '@mui/icons-material/Mic';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';
import { auth, db } from '@/app/firebase';
import { useAppSelector } from '@/lib/hooks';
import useCollection from '@/hooks/useCollection';
import { addDoc, collection } from 'firebase/firestore';

const Sidebar = () => {
  const user = useAppSelector((state) => state.user.user);

  const { documents: channels } = useCollection('channels');

  const addChannel = async () => {
    const channelName: string | null = prompt('新しいチャンネルを作成します');

    if (channelName) {
      await addDoc(collection(db, 'channels'), {
        channelName: channelName,
      });
    }
  };
  return (
    <div className="sidebar">
      {/* SidebarLeft */}
      <div className="sidebarLeft">
        <div className="serverIcon">
          <img src="/discordIcon.png" alt="サーバーアイコン" />
        </div>
        <div className="serverIcon">
          <img src="/bs-logo_icon_black.jpg" alt="サーバーアイコン" />
        </div>
      </div>
      {/* SidebarRight */}
      <div className="sidebarRight">
        <div className="sidebarTop">
          <h3>Discord</h3>
          <ExpandMoreIcon />
        </div>

        <div className="sidebarChannels">
          <div className="sidebarChannelsHeader">
            <div className="sidebarHeader">
              <ExpandMoreIcon />
              <h4>プログラミングチャンネル</h4>
            </div>
            <AddIcon className="sidebarAddIcon" onClick={() => addChannel()} />
          </div>

          <div className="sidebarChannelList">
            {channels.map((channel) => (
              <SidebarChannel
                key={channel.id}
                channel={channel}
                id={channel.id}
              />
            ))}
          </div>

          <div className="sidebarFooter">
            <div className="sidebarAccount">
              <div className="sidebarAccountImageWrap">
                {user?.photo && (
                  <img
                    src={user?.photo}
                    alt=""
                    onClick={() => auth.signOut()}
                  />
                )}
              </div>
              <div className="accountName">
                <h4>{user?.displayName}</h4>
                <span>#{user?.uid.substring(0, 4)}</span>
              </div>
            </div>

            <div className="sidebarVoice">
              <MicIcon />
              <HeadphonesIcon />
              <SettingsIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
