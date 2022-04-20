import { IMAGE, STRING } from "../utils/schemaTypes";

export default {
  title: "Details",
  name: "details",
  type: "object",
  fields: [
    {
      title: "Text",
      name: "text",
      type: STRING,
    },
    {
      title: "Icon",
      name: "detailsIcon",
      type: IMAGE,
    },
  ],
};
