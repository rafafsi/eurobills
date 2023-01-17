import styled from "styled-components";

import Costs from "./components/Costs";
import ExchangeRates from "./components/ExchangeRates";

function App() {
  return (
    <Content>
      <Title>EuroBills</Title>
      <Costs />
      <ExchangeRates />
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

const Title = styled.h1`
  font-family: "Yeon Sung", cursive;
  text-align: center;
  font-size: 3em;
`;

