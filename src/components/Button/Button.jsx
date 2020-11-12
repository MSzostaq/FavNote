import styled, { css } from "styled-components";

const Button = styled.button`
  background-color: #e6e6e6;
  border: none;
  border-radius: 50px;
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  width: 220px;
  height: 47px;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: #ffd82b;
      font-size: 10px;
      width: 105px;
      height: 30px;
    `}
`;

export default Button;
