import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ theme }) => theme.article};
  border: 0;
  border-radius: 50px;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0;
  width: 220px;
  height: 47px;

  ${({ secondary }) =>
    secondary &&
    `
      background-color: #e6e6e6;
      font-size: 10px;
      width: 105px;
      height: 30px;
    `}
`;

export default Button;
