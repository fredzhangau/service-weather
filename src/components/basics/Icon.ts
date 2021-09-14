import styled from "styled-components";

export const Icon = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width ?? "50px"};
  height: ${(props) => props.height ?? "50px"};
`;
