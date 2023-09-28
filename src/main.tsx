import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GameContextProvider } from "./context/GameContext.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <GameContextProvider>
    <App />
  </GameContextProvider>
);
