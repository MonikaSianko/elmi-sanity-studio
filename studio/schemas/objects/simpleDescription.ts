import { IMAGE, OBJECT, STRING, TEXT } from "../utils/schemaTypes";

export default {
  title: "simpleDescription",
  name: "simpleDescription",
  type: OBJECT,
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
      type: TEXT,
      name: "text",
    },
    {
      title: "Description image",
      type: "captionImage",
      name: "descriptionImage",
    },
  ],
};
