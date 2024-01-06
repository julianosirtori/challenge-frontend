import { QueryClientProvider } from "@/lib/reactQuery";
import { Router } from "@/routes";
import { StylesManager } from "@/styles/StylesManager";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <QueryClientProvider>
      <StylesManager>
        <GlobalStyle />
        <Router />
      </StylesManager>
    </QueryClientProvider>
  );
}

export default App;
