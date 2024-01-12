import { Outlet } from "react-router-dom";

import { Container, Main } from "./styles";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { languages } from "@/constants";

export function Root() {
  const stringsFooter = languages.pt.footer;

  return (
    <Container>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer
        text={stringsFooter.footerAllrightsReserved}
        privacyText={stringsFooter.privacyAndPolicy}
        termsAndUsageText={stringsFooter.termsAndUsage}
        helpText={stringsFooter.helpLink}
      />
    </Container>
  );
}
