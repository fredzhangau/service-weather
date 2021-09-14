import styled from "styled-components";
import { black } from "../../styles";

type ITextItem = {
  color?: string;
  background?: string;
  flex?: string;
  fontSize?: string;
  fontWeight?: string;
  margin?: string;
  minWidth?: string;
  opacity?: string;
  padding?: string;
  textTransform?: "uppercase" | "lowercase" | "capitalize";
};

export const TextItem = styled.div<ITextItem>`
  color: ${(props) => props.color ?? { black }};
  background: ${(props) => props.background ?? ""};
  flex: ${(props) => props.flex ?? "0 1 auto"};
  font-size: ${(props) => props.fontSize ?? "28px"};
  font-weight: ${(props) => props.fontWeight ?? "normal"};
  margin: ${(props) => props.margin ?? "0"};
  min-width: ${(props) => props.minWidth ?? "0"};
  opacity: ${(props) => props.opacity ?? "1"};
  padding: ${(props) => props.padding ?? "0"};
  text-transform: ${(props) => props.textTransform ?? "none"}; ;
`;
