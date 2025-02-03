import Image from 'next/image';
import './Login.scss';
import { Button } from '@mui/material';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../firebase';

const Login = () => {
  const signIn = () => {
    signInWithPopup(auth, provider).catch((err) => {
      alert(err.message);
    });
  };
  return (
    <div className="login">
      <div className="loginLogo">
        <Image priority src="/discordIcon.png" alt="" width={50} height={50} />
      </div>

      <Button onClick={signIn}>ログイン</Button>
    </div>
  );
};

export default Login;
