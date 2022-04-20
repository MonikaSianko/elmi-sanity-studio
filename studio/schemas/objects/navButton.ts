import { STRING } from "../utils/schemaTypes";

export default {
  title: "Navigation button",
  name: "navButton",
  fields: [
    {
      title: "Link text",
      name: "linkText",
      type: STRING,
    },
    {
      title: "Path",
      name: "path",
      type: STRING,
    },
  ],
};
