import StartMenu from "./components/StartMenu";
import ContextProvider from "./components/context/ContextProvider";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <StartMenu />
      </ContextProvider>
    </div>
  );
}

export default App;
