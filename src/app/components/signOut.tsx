'use client';
import { signOut } from 'next-auth/react';
import Image from 'next/image';

type PropsSignout = {
  name: string;
  email: string;
  image: string;
};
export default function SignOut({ name, email, image }: PropsSignout) {
  return (
    <div className="text-center space-y-2 border-2 border-slate-400 max-w-md m-5 p-2 mx-auto rounded-md">
      <p>
        Hello <span className="font-bold">{name}</span>
      </p>
      <p className="font-bold">{email}</p>
      <Image
        alt="user-image"
        width={75}
        height={50}
        src={image}
        className="mx-auto"
      />
      <button
        className="bg-slate-300 px-2 py-1 rounded-md"
        onClick={() => signOut()}
      >
        Sign out
      </button>
    </div>
  );
}
