import Image from 'next/image';
import './Sidebar.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import MicIcon from '@mui/icons-material/Mic';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* SidebarLeft */}
      <div className="sidebarLeft">
        <div className="serverIcon">
          <Image
            src="/discordIcon.png"
            alt="サーバーアイコン"
            width={100}
            height={100}
          />
        </div>
        <div className="serverIcon">
          <Image
            src="/bs-logo_icon_black.jpg"
            alt="サーバーアイコン"
            width={100}
            height={100}
          />
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
            <AddIcon className="sidebarAddIcon" />
          </div>

          <div className="sidebarChannelList">
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
          </div>

          <div className="sidebarFooter">
            <div className="sidebarAccount">
              <div className="sidebarAccountImageWrap">
                <Image
                  src="/bs-logo_icon_black.jpg"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div className="accountName">
                <h4>nataro</h4>
                <span>#8162</span>
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
