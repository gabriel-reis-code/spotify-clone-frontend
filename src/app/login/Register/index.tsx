'use client'

import { useEffect, useState } from "react";

type RegisterProps = {
  addressCallback: (input: string) => unknown;
  passwordCallback: (input: string) => unknown;
}

export default function Register({
  addressCallback,
  passwordCallback
}: RegisterProps) {
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    addressCallback(address);
  }, [address]);

  useEffect(() => {
    passwordCallback(password);
  }, [password]);

  return (
    <div>
      <input
        className="my-10 rounded-full p-4 w-full text-black"
        placeholder="Address"
        type="text"
        value={address}
        onChange={(e) => {setAddress(e.target.value)}}
      />

      <input
        className="rounded-full p-4 w-full text-black"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => {setPassword(e.target.value)}}
      />
    </div>
  );
}