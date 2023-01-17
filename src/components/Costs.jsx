import { useState } from "react";
import styled from "styled-components";
import Input from "./form/Input";
import Wrapper from "./Wrapper";

const Costs = () => {
  const [data, setData] = useState({});

  const getData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <Pair>
          <Label htmlFor="description">Description: </Label>
          <Input type="text" name="description" handleOnChange={getData} />
        </Pair>

        <Pair>
          <Label htmlFor="valueItem">Value: </Label>
          <Input type="number" name="valueItem" handleOnChange={getData} />
        </Pair>

        <button type="submit">Send</button>
      </form>
    </Wrapper>
  );
};

export default Costs;

const Label = styled.label`
  font-family: "Andika", sans-serif;
`;

const Pair = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
