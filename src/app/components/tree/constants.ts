import { v4 } from "uuid";

import { TreeEntity } from "src/types";

export const ROOT_TREE_ENTITY: TreeEntity = {
  uuid: v4(),
  children: [
    {
      uuid: v4(),
      children: [
        {
          uuid: v4(),
          children: [
            {
              uuid: v4(),
              children: [],
              isFolder: false,
              name: "filename 1",
            },
            {
              uuid: v4(),
              children: [],
              isFolder: false,
              name: "filename 2",
            },
            {
              uuid: v4(),
              children: [],
              isFolder: false,
              name: "filename 3",
            },
          ],
          isFolder: true,
          name: "/folder 3",
        },
      ],
      isFolder: true,
      name: "/folder 1",
    },
    {
      uuid: v4(),
      children: [],
      isFolder: false,
      name: "filename 10",
    },
    {
      uuid: v4(),
      children: [],
      isFolder: false,
      name: "filename 11",
    },
    {
      uuid: v4(),
      children: [
        {
          uuid: v4(),
          children: [],
          isFolder: false,
          name: "filename 20",
        },
      ],
      isFolder: true,
      name: "/folder 2",
    },
  ],
  isFolder: true,
  name: "/root",
};
