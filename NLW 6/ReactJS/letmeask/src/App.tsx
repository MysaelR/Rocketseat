import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { createContext, useState } from "react";

export const testContext = createContext({} as any);

function App() {

  const [value, setValue] = useState("Test");


  return (

    <BrowserRouter>
      <testContext.Provider value={{ value, setValue }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="rooms/new" element={<NewRoom />} />
        </Routes>
      </testContext.Provider>


    </BrowserRouter>

  );
}

export default App;
