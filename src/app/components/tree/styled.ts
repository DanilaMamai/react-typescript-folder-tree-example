import styled from "styled-components";

import { Flex } from "src/styled";

const TreeFlex = styled(Flex).attrs({
  $height: "100%",
  $padding: "16px",
  $width: "100%",
})`
  border: 1px solid #000000;
  border-radius: 16px;
`;

export { TreeFlex };
