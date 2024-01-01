'use client';
import { signIn } from 'next-auth/react';
export default function LoginGithub() {
  return (
    <div className="text-center max-w-md  p-2 mx-auto rounded-md">
      <button
        className="bg-slate-300 px-5 py-2 rounded-md  hover:bg-slate-400"
        onClick={() => signIn('github')}
      >
        Login with github
      </button>
    </div>
  );
}
