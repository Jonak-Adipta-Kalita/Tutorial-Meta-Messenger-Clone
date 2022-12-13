import { getProviders } from "next-auth/react";
import Image from "next/image";
import SignInComponent from "../../../components/SignInComponent";

type Props = {};

const SignInPage = async (props: Props) => {
  const providers = await getProviders();

  return (
    <div className="grid justify-center">
      <div className="">
        <Image
          src="https://links.papareact.com/161"
          width={700}
          height={700}
          className="rounded-full mx-2 object-cover"
          alt="loginLogo"
        />
      </div>
      <SignInComponent providers={providers} />
    </div>
  );
};

export default SignInPage;
