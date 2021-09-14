import styled from "styled-components";

type IPaper = {
  background?: string;
  alignItem?: "stretch" | "center" | "flex-start" | "flex-end" | "baseline";
  flex?: string;
  flexDirection?: "column" | "row";
  flexWrap?: "wrap" | "nowrap" | "wrap-reverse";
  minHeight?: string;
  height?: string;
  padding?: string;
  width?: string;
};

export const Paper = styled.div<IPaper>`
  background: ${(props) => props.background ?? ""};
  align-items: ${(props) => props.alignItem ?? "stretch"};
  display: flex;
  flex: ${(props) => props.flex ?? "0 1 auto"};
  flex-direction: ${(props) => props.flexDirection ?? "column"};
  flex-wrap: ${(props) => props.flexWrap ?? "nowrap"};
  height: ${(props) => props.height ?? "auto"};
  min-height: ${(props) => props.minHeight ?? "0"};
  padding: ${(props) => props.padding ?? "20px"};
  width: ${(props) => props.width ?? "auto"};
`;
