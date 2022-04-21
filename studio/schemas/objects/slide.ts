import { IMAGE, OBJECT, STRING } from "../utils/schemaTypes";

export default {
  title: "Slide",
  name: "slide",
  type: OBJECT,
  fields: [
    {
      title: "Title",
      name: "title",
      type: STRING,
      desciption: "If left empty, slide will consist only of image",
    },
    {
      title: "Slide Image",
      name: "slideImage",
      type: "captionImage",
    },
  ],
};
