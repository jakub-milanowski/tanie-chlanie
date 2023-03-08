import Image from "../../../../components/atoms/image/image";
import { SNavBar } from "./nav-bar.style";
import logo from "../../../../assets/logo/logo.png";

const NavBar = () => {
  return (
    <SNavBar fullwidth>
      <Image src={logo} alt="tanie chalnie logo" />
    </SNavBar>
  );
};

export default NavBar;
