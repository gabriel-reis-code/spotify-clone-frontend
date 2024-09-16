'use client'
import React, { useEffect } from "react";
import { useState } from "react";

type LoginMethodProps = {
  signMethodCallback: (signOption: string) => unknown
};


export function LoginMethod({
  signMethodCallback
}: LoginMethodProps) {
  const [signOption, setSignOption] = useState('sign-in');

  useEffect(() => {
    signMethodCallback(signOption);
  }, [signOption]);

  return (
    <div className="w-[100%] flex-col flex items-center justify-center">
      <div className="w-[100%] text-lg font-bold flex justify-between mt-3 px-2">
        <span
          className="hover:cursor-pointer"
          onClick={() => {setSignOption('sign-in')}}>
          SIGN IN
        </span>

        <span
          className="hover:cursor-pointer"
          onClick={() => {setSignOption('sign-up')}}
        >
          SIGN UP
        </span>
      </div>
      <div
        className={`
          animate-wiggle self-start w-20 h-[4px] rounded-lg bg-green-spotify
          ${
            signOption == 'sign-in' ?
            'ml-[1px] self-start'
            :
            'mr-[5px] self-end'}
          `}
        />
    </div>
  );
}

export default LoginMethod;