import styled from "styled-components";
import magnifierIcon from "../../../assets/icons/magnifier.svg";

const Input = styled.input`
  background-color: ${({ theme }) => theme.grey100};
  border: 0;
  border-radius: 50px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
  padding: 15px 30px;

  ::placeholder {
    color: ${({ theme }) => theme.grey300};
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  ${({ search }) =>
    search &&
    `
      background-image: url(${magnifierIcon});
      background-size: 15px;
      background-position: 10px 50%;
      background-repeat: no-repeat;
      font-size: ${({ theme }) => theme.fontSize.xs}
      padding: 10px 20px 10px 40px;
    `}
`;

export default Input;
