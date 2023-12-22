import { useState } from "react";
import { LibreriaContext } from "./context/LibreriaContext";
import { BibliotecaRouter } from "./router/BibliotecaRouter";
import { Header } from "./components/Header";

function App() {
  const [globalClicks, setGlobalClicks] = useState(0);

  let updateClicks = () => {
    setGlobalClicks(globalClicks + 1);
  };

  return (
      <>
        <Header></Header>
        <LibreriaContext.Provider value={{ globalClicks, updateClicks }}>
          <BibliotecaRouter></BibliotecaRouter>
        </LibreriaContext.Provider>
      </>
  );
}

export default App;