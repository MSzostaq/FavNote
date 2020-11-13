import styled from "styled-component";

const ButtonIcon = styled.button`
  background-color: ${({ active }) => (active ? "#ffffff" : "transparent")};
  background-image: url(${({ icon }) => icon});
  background-position: 50% 50%;
  background-size: 40%;
  border: 0;
  border-radius: 20px;
  width: 67px;
  height: 67px;
`;

export default ButtonIcon;
