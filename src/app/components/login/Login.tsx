import Image from 'next/image';
import './Login.scss';
import { Button } from '@mui/material';

const Login = () => {
  return (
    <div className="login">
      <div className="loginLogo">
        <Image src="/discordIcon.png" alt="" width={50} height={50} />
      </div>

      <Button>ログイン</Button>
    </div>
  );
};

export default Login;
