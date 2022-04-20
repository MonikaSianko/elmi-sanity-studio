import { STRING } from "../utils/schemaTypes";

export default {
  title: "CTA",
  name: "cta",
  type: "object",
  fields: [
    {
      title: "Text",
      type: STRING,
      name: "text",
    },
    {
      title: "Path",
      type: STRING,
      name: "path",
    },
    {
      title: "Icon",
      type: "captionImage",
      name: "icon",
    },
  ],
};
