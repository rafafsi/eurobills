import styled from "styled-components";

const Input = ({ type, name, handleOnChange, placeHolder }) => {
  return (
    <div>
      <StyledInput
        type={type}
        name={name}
        onChange={handleOnChange}
        placeholder={placeHolder}
      />
    </div>
  );
};

export default Input;

const StyledInput = styled.input`
  padding: 8px;
  border: 1px solid var(--strongYellow);
  border-radius: 15px;
`;
