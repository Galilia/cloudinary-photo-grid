import {ContextProvider} from "./context/context";
import {GridPage} from "./components/pages/GridPage";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <GridPage />
      </ContextProvider>
    </div>
  );
}

export default App;
