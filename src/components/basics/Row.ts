import styled from "styled-components";
import { black } from "../../styles";

type IRow = {
  alignItems?: "center" | "flex-start" | "flex-end" | "stretch" | "baseline";
  flexWrap?: "wrap" | "nowrap" | "wrap-reverse";
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-around"
    | "space-between"
    | "space-evently";
  background?: string;
  color?: string;
  margin?: string;
  padding?: string;
  textAlign?: "center" | "left" | "right" | "justify";
  width?: string;
  maxWidth?: string;
};

export const Row = styled.div<IRow>`
  align-items: ${(props) => props.alignItems ?? "flex-start"};
  display: flex;
  flex-direction: row;
  flex-wrap: ${(props) => props.flexWrap ?? "wrap"};
  justify-content: ${(props) => props.justifyContent ?? "flex-start"};
  background: ${(props) => props.background ?? ""};
  color: ${(props) => props.color ?? { black }};
  margin: ${(props) => props.margin ?? "0"};
  padding: ${(props) => props.padding ?? "0"};
  text-align: ${(props) => props.textAlign ?? "left"};
  width: ${(props) => props.width ?? "auto"};
  max-width: ${(props) => props.maxWidth ?? "none"};
`;
