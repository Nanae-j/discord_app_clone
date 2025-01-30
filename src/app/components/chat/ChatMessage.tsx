import './ChatMessage.scss';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const ChatMessage = () => {
  return (
    <div className="message">
      <div className="icon">
        <AccountCircleIcon />
      </div>
      <div className="messageInfo">
        <div className="messageInfoBox">
          <h4>nataro</h4>
          <span className="messageTimeStamp">205/1/30</span>
        </div>
        <p>メッセージ本文</p>
      </div>
    </div>
  );
};

export default ChatMessage;
