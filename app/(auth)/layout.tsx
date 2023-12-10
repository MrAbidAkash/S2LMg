import { ClerkProvider } from "@clerk/nextjs";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className=" flex h-[80dvh] items-center justify-center  ">{children}</div>;
};

export default AuthLayout;
