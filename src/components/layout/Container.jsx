import styled from "styled-components";

export const Container = ({ children }) => {
  return <Style>{children}</Style>;
};

const Style = styled.div`
  height: 80%;
  width: 80%;
  margin-top: 40px;
`;
