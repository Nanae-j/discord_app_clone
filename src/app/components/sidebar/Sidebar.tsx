import Image from 'next/image';
import './Sidebar.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* SidebarLeft */}
      <div className="sidebarLeft">
        <div className="serverIcon">
          <Image
            src="/bs-logo_icon_black.jpg"
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
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
