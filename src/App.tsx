import { Router } from "./routes";
import { StylesManager } from "./styles/StylesManager";

function App() {
  return (
    <StylesManager>
      <Router />
    </StylesManager>
  );
}

export default App;
