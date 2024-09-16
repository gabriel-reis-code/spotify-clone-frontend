import LoginModal from './LoginModal';
import { redirect } from 'next/navigation';


export function LoginPage() {
  console.log('aquiiiii');
  return (
    <div className='bg-login-image bg-center bg-blur bg-no-repeat bg-blu bg-contain h-[100vh] w-[100vw]'>
      <div className='backdrop-blur-lg w-[100%] h-[100%] flex justify-center items-center'>
        <LoginModal />
      </div>
    </div>
  );
}

export default LoginPage;