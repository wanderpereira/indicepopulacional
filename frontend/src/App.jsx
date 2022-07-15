import DefaultContext from "./pages/context/DefaultContext";
import Home from "./pages/Home";

function App() {
  return (
    <DefaultContext>
      <Home />
    </DefaultContext>
  );
}
export default App;