import styled from "styled-components";

const Wrapper = ({ children }) => {
  return <Style> {children}</Style>;
};

export default Wrapper;

const Style = styled.div`
  background-color: var(--lightYellow);
  padding: 2em;
  margin: 1em;
  box-shadow: 0px 0px 7px 0px black;
  border-radius: 25px;
  width: 20em;
`;
