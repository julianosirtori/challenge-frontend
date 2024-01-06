import { Outlet } from "react-router-dom";
import Header from "../../components/header";
import { footerAllrightsReserved, helpLink, privacyAndPolicy, termsAndUsage } from "../../constants";
import Footer from "../../components/footer";
import { Container } from "./styles";

export function Root(){
  return (
    <Container>
      <Header/>
      <Outlet/>
      <Footer
        text={footerAllrightsReserved}
        privacyText={privacyAndPolicy}
        termsAndUsageText={termsAndUsage}
        helpText={helpLink}
      />
    </Container>
  )
}