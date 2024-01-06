import Footer from "./components/footer";
import Header from "./components/header";
import Shelves from "./components/shelves";
import {
  footerAllrightsReserved,
  helpLink,
  privacyAndPolicy,
  termsAndUsage,
} from "./constants";
import { StylesManager } from "./styles/StylesManager";

function App() {
  return (
    <StylesManager>
      <Header />
      <Shelves />
      <Footer
        text={footerAllrightsReserved}
        privacyText={privacyAndPolicy}
        termsAndUsageText={termsAndUsage}
        helpText={helpLink}
      />
    </StylesManager>
  );
}

export default App;
