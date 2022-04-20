import { STRING } from "../utils/schemaTypes";

export default {
  title: "simpleDescription",
  name: "simpleDescription",
  type: "object",
  fields: [
    {
      title: "Title",
      type: STRING,
      name: "title",
    },
    {
      title: "Subtitle",
      type: STRING,
      name: "subtitle",
    },
    {
      title: "Text",
      type: "text",
      name: "text",
    },
    {
      title: "Image",
      type: "captionImage",
      name: "image",
    },
  ],
};
