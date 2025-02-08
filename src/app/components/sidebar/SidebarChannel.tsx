import { DocumentData } from 'firebase/firestore';
import './SidebarChannel.scss';
import { useAppDispatch } from '@/lib/hooks';
import { setChannelInfo } from '@/lib/features/channelSlice';

type Props = {
  id: string;
  channel: DocumentData;
};

const SidebarChannel = ({ id, channel }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <div
      className="sidebarChannel"
      onClick={() =>
        dispatch(
          setChannelInfo({
            channelId: id,
            channelName: channel.channel.channelName,
          }),
        )
      }
    >
      <h4>
        <span className="sidebarChannelHash">#</span>
        {channel.channel.channelName}
      </h4>
    </div>
  );
};

export default SidebarChannel;
