'use client'
import { useEffect, useMemo, useState } from "react";
import LoginMethod from "../LoginMethod";
import Register from "../Register";
import SignButton from "../SignButton";

export function LoginModal() {
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [signMethod, setSignMethod] = useState('sign-in');

  const signButtonText = useMemo(() => {
    return signMethod === 'sign-in' ? 'SIGN IN' : 'SIGN UP'
  }, [signMethod]);


  function signInMethodCallback(input: string) {
    if (signMethod !== input) {
      setSignMethod(input);
    }
  }

  function onClickSignButton() {

  }

  return (
    <div className="rounded-md bg-grey-spotify w-3/12 h-auto p-10">
      <div className="flex justify-center items-center">
        <img src="/Spotify_Full_Logo_RGB_White.png" width={200} />
      </div>
      <div className="flex flex-col items-center">
        <div className="w-8/12">
          <LoginMethod
            signMethodCallback={signInMethodCallback}
          />
        </div>
        <Register
          addressCallback={setAddress}
          passwordCallback={setPassword}
        />
        <SignButton
          text={signButtonText}
          onClickCallback={onClickSignButton}
        />
      </div>
    </div>
  );
}

export default LoginModal;