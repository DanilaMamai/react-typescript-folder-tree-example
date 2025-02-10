import React from "react";

import { IMAGES } from "src/constants";
import { Props } from "./types";
import {
  TreeEntityChildrenFlex,
  TreeEntityDataFlex,
  TreeEntityFlex,
  TreeEntityImg,
  TreeEntityTypography,
} from "./styled";

export const TreeEntity = (props: Props) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const onClick = () => setIsOpen((value) => !value);

  return (
    <TreeEntityFlex>
      <TreeEntityDataFlex onClick={onClick}>
        <TreeEntityImg
          src={props.treeEntity.isFolder ? IMAGES["Folder"] : IMAGES["File"]}
        ></TreeEntityImg>
        <TreeEntityTypography>{props.treeEntity.name}</TreeEntityTypography>
      </TreeEntityDataFlex>
      <TreeEntityChildrenFlex $isOpen={isOpen}>
        {props.treeEntity.children.map((treeEntity) => (
          <TreeEntity key={treeEntity.uuid} treeEntity={treeEntity} />
        ))}
      </TreeEntityChildrenFlex>
    </TreeEntityFlex>
  );
};
