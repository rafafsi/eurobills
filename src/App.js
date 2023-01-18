import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./components/layout/Navbar";

import Contact from "./components/views/Contact";
import GeneralCosts from "./components/views/GeneralCosts";
import Cities from "./components/views/Cities";
import Wallet from "./components/views/Wallet";

function App() {
  return (
    <Content>
      <Navbar />
      <Routes>
        <Route path="/cities" element={<Cities />} />
        <Route path="/general-cost" element={<GeneralCosts />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Content>
  );
}

export default App;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

