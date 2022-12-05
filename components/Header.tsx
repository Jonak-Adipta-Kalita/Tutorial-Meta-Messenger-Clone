import Image from "next/image";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  const session = true;

  return (
    <header className="sticky top-0 z-50 bg-white flex justify-center items-center p-10 shadow-sm">
      {session ? (
        <div className="flex space-x-2">
          <Image
            src="https://links.papareact.com/jne"
            alt="profile-pic"
            height={10}
            width={50}
            className="rounded-full mx-2 object-contain"
          />
          <div className="">
            <p className="">Logged in as:</p>
            <p className="">JAK Clone</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center space-y-5">
          <div className="flex space-x-2 items-center">
            <Image
              src="https://links.papareact.com/jne"
              alt="header-icon"
              height={10}
              width={50}
            />
            <p className="text-blue-400">Welcome to Meta Messenger</p>
          </div>
          <Link
            href="/auth/signin"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign In
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
