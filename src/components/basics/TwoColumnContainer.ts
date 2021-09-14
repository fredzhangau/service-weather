import styled from "styled-components";

type ITwoColumnContainer = {
  margin?: string;
  width?: string;
};

export const TwoColumnContainer = styled.div<ITwoColumnContainer>`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: ${(props) => props.margin ?? "0"};
  text-align: center;
  width: ${(props) => props.width ?? "auto"};
`;
