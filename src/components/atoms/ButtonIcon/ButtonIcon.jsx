import styled from "styled-components";

const ButtonIcon = styled.button`
  background-color: ${({ active }) => (active ? "#ffffff" : "transparent")};
  background-image: url(${({ icon }) => icon});
  background-position: 50% 50%;
  background-size: 40%;
  border: 0;
  border-radius: 20px;
  display: block;
  width: 67px;
  height: 67px;

  &.active {
    background-color: "#ffffff";
  }
`;

export default ButtonIcon;
