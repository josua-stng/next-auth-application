import { getServerSession } from 'next-auth';
import LoginGoogle from './components/loginGoogle';
import { authOption } from './utils/auth-option';
import SignOut from './components/signOut';
import LoginGithub from './components/loginGithub';

export default async function Home() {
  const serverSession = await getServerSession(authOption);
  console.log(serverSession);
  return (
    <div>
      {serverSession ? (
        <SignOut
          name={serverSession?.user?.name!}
          email={serverSession?.user?.email!}
          image={serverSession?.user?.image!}
        />
      ) : (
        <div className="text-center border-2 border-slate-400 max-w-md m-5 p-2 mx-auto rounded-md">
          <p className="mb-2 font-bold">Login Provider</p>
          <LoginGoogle />
          <LoginGithub />
        </div>
      )}
    </div>
  );
}
