import styled from "styled-components";

const Input = ({ type, name, handleOnChange }) => {
  return (
    <div>
      <StyledInput type={type} name={name} onChange={handleOnChange} />
    </div>
  );
};

export default Input;

const StyledInput = styled.input`
  margin: 3px;
  padding: 10px;
  border-radius: 10px;
`;
