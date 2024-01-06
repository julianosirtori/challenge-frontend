import { QueryClientProvider } from "@/lib/reactQuery";
import { Router } from "@/routes";
import { StylesManager } from "@/styles/StylesManager";

function App() {
  return (
    <QueryClientProvider>
      <StylesManager>
        <Router />
      </StylesManager>
    </QueryClientProvider>
  );
}

export default App;
