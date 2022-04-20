import { STRING } from "../utils/schemaTypes";

export default {
  title: "Slide",
  name: "slide",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: STRING,
      desciption: "If left empty, slide will consist only of image",
    },
    {
      title: "Image",
      name: "image",
      type: "captionImage",
    },
  ],
};
