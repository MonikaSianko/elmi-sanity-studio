import { IMAGE, STRING } from "../utils/schemaTypes";

export default {
  title: "Navigation button",
  name: "navButton",
  fields: [
    {
      title: "Path",
      name: "navBtnPath",
      type: STRING,
    },
    {
      title: "Icon",
      name: "navBtnIcon",
      type: IMAGE,
    },
  ],
};
