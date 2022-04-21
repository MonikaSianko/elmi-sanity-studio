import { IMAGE, OBJECT, STRING } from "../utils/schemaTypes";

export default {
  title: "Details",
  name: "details",
  type: OBJECT,
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
