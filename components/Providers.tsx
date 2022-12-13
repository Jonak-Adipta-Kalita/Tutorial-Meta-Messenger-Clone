"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import React from "react";

type Props = {
  session: Session | null | undefined;
  children: React.ReactNode;
};

const Providers = ({ children, session }: Props) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Providers;
