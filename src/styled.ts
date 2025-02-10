import styled, { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
    font-family: Helvetica, sans-serif;
    user-select: none;
  }

  html,
  body {
    height: 100%;
    width: 100%;

    overflow: hidden;
    touch-action: none;
  }

  #root {
    height: 100%;
    width: 100%;
  }

  body {
    margin: 0;

    background-color: #ffffff;
  }

  img {
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
`;

const Button = styled.button<{
  $height?: string;
  $isError?: boolean;
  $isHidden?: boolean;
  $isLoading?: boolean;
  $isSelected?: boolean;
  $isSmall?: boolean;
  $position?: React.CSSProperties["position"];
  $width?: string;
}>`
  position: ${({ $position }) => $position};

  padding: 0;
  margin: 0;

  height: ${({ $height }) => $height};
  width: ${({ $width }) => $width};

  background: none;
  border: 0;
  outline: 0;
`;

const Flex = styled.div<{
  $alignItems?: React.CSSProperties["alignItems"];
  $flex?: React.CSSProperties["flex"];
  $flexDirection?: React.CSSProperties["flexDirection"];
  $flexWrap?: React.CSSProperties["flexWrap"];
  $gap?: string;
  $height?: string;
  $justifyContent?: React.CSSProperties["justifyContent"];
  $isHidden?: boolean;
  $isOpen?: boolean;
  $isSelected?: boolean;
  $isVisible?: boolean;
  $margin?: string;
  $padding?: string;
  $sx?: React.CSSProperties;
  $width?: string;
}>`
  align-items: ${({ $alignItems }) => $alignItems ?? "stretch"};
  display: flex;
  flex: ${({ $flex }) => $flex};
  flex-direction: ${({ $flexDirection }) => $flexDirection ?? "row"};
  flex-wrap: ${({ $flexWrap }) => $flexWrap};
  gap: ${({ $gap }) => $gap ?? "0rem"};
  justify-content: ${({ $justifyContent }) => $justifyContent ?? "flex-start"};

  margin: ${({ $margin }) => $margin};
  padding: ${({ $padding }) => $padding};

  height: ${({ $height }) => $height};
  width: ${({ $width }) => $width};

  ${({ $sx }) => ({ ...$sx })}
`;

const Typography = styled.span<{
  $color?: string;
  $fontFamily?: string;
  $fontSize?: string;
  $fontWeight?: number;
  $letterSpacing?: string;
  $lineHeight?: string;
  $textAlign?: React.CSSProperties["textAlign"];
}>`
  color: ${({ $color }) => $color ?? "#000000"};
  font-family: ${({ $fontFamily }) => $fontFamily ?? "Helvetica, sans-serif"};
  font-size: ${({ $fontSize }) => $fontSize ?? "16px"};
  font-weight: ${({ $fontWeight }) => $fontWeight ?? 400};
  letter-spacing: ${({ $letterSpacing }) => $letterSpacing};
  line-height: ${({ $lineHeight }) => $lineHeight};
  text-align: ${({ $textAlign }) => $textAlign ?? "left"};
`;

export { Button, Flex, GlobalStyles, Typography };
