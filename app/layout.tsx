import { unstable_getServerSession } from "next-auth";
import Header from "../components/Header";
import Providers from "../components/Providers";
import "../styles/globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await unstable_getServerSession();

  return (
    <html>
      <head />
      <body>
        <Providers session={session}>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
