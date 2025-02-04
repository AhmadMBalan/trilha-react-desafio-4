import styled from "styled-components";

export const ButtonContainer = styled.button<{ disabled?: boolean }>`
  width: 100%;
  height: 42px;
  background-color: ${(props) => (props.disabled ? "#ccc" : "#81259D")};
  color: white;
  border: none;
  border-radius: 21px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-size: 16px;

  &:hover {
    opacity: ${(props) => (props.disabled ? 1 : 0.6)};
  }
`;