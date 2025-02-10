import styled, { css } from "styled-components";

import { Flex, Typography } from "src/styled";

const TreeEntityImg = styled.img`
  height: 24px;
  width: 24px;
`;

const TreeEntityTypography = styled(Typography).attrs({
  $fontSize: "24px",
})``;

const TreeEntityChildrenFlex = styled(Flex).attrs({
  $flexDirection: "column",
  $margin: "0 0 0 16px",
})<{ $isOpen: boolean }>`
  ${({ $isOpen }) =>
    $isOpen
      ? css`
          height: auto;

          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        `
      : css`
          height: 0;

          clip-path: polygon(0 0, 100% 0, 100% 0%, 0 0%);
        `}

  overflow: hidden;
  transition: clip-path 300ms ease-out;
`;

const TreeEntityDataFlex = styled(Flex).attrs({
  $alignItems: "center",
  $gap: "8px",
  $justifyContent: "flex-start",
})`
  cursor: pointer;
`;

const TreeEntityFlex = styled(Flex).attrs({
  $flexDirection: "column",
})``;

export {
  TreeEntityChildrenFlex,
  TreeEntityDataFlex,
  TreeEntityFlex,
  TreeEntityImg,
  TreeEntityTypography,
};
