import styled from "styled-components";

type ITwoRowContainer = {
  margin?: string;
  textAlign?: "center" | "left" | "right" | "justify" | "inherit";
  width?: string;
};

export const TwoRowContainer = styled.div<ITwoRowContainer>`
  display: flex;
  flex-direction: column;
  margin: ${(props) => props.margin ?? "0"};
  text-align: ${(props) => props.textAlign ?? "inherit"};
  width: ${(props) => props.width ?? "auto"};
`;
