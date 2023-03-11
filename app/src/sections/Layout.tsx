import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <div className="p-4 flex-[1_1_100%]">{children}</div>;
}
