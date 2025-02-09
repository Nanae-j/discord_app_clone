import { Timestamp } from 'firebase/firestore';
import './ChatMessage.scss';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar } from '@mui/material';

type Props = {
  timestamp: Timestamp;
  message: string;
  user: {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  };
};

const ChatMessage = ({ timestamp, message, user }: Props) => {
  return (
    <div className="message">
      <div className="icon">
        <Avatar src={user?.photo} />
        {/* <AccountCircleIcon /> */}
      </div>
      <div className="messageInfo">
        <div className="messageInfoBox">
          <h4>{user?.displayName}</h4>
          <span className="messageTimeStamp">
            {new Date(timestamp?.toDate()).toLocaleString()}
          </span>
        </div>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
