import React from "react";

import { ROOT_TREE_ENTITY } from "./constants";
import { TreeEntity } from "./components";
import { TreeFlex } from "./styled";

export const Tree = () => (
  <TreeFlex>
    <TreeEntity treeEntity={ROOT_TREE_ENTITY} />
  </TreeFlex>
);
