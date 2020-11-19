import styled from "styled-components";

const ButtonIcon = styled.button`
  background-color: transparent;
  background-image: url(${({ icon }) => icon});
  background-position: 50% 50%;
  background-repeat: no-reperat;
  background-size: 40%;
  border: none;
  border-radius: 20px;
  display: block;
  width: 67px;
  height: 67px;

  &.active {
    background-color: white;
  }
`;

export default ButtonIcon;
