import BottomNav from "./shared/BottomNav";
import Topnav from "./shared/Topnav";

const Header = () => {
  return (
    <header className="w-full">
      <Topnav />
      <BottomNav />
    </header>
  );
};

export default Header;
