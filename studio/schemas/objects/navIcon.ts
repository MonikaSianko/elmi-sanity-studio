import { IMAGE, STRING } from "../utils/schemaTypes";

export default {
  title: "Navigation button",
  name: "navButton",
  fields: [
    {
      title: "Path",
      name: "path",
      type: STRING,
    },
    {
      title: "Icon",
      name: "icon",
      type: IMAGE,
    },
  ],
};
