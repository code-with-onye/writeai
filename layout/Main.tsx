import type { ReactNode } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

interface IMainProps {
  meta: ReactNode;
  children: ReactNode;
}
const Main = ({ meta, children }: IMainProps) => {
  return (
    <div>
      {meta}
      <div className="flex flex-col items-center ">
        {/* Header */}
        <Header />

        <div className="w-full px-4">{children}</div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Main;
