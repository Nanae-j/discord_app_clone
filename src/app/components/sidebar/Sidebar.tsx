import Image from 'next/image';
import './Sidebar.scss';

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
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
