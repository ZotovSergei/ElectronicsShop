import { AppBar } from "components";
import Navigation from "modules/Navigation";

const Header = () => {
  return (
    <AppBar position='static'>
      <Navigation />
    </AppBar>
  );
};
export default Header;
