import { IMAGE, OBJECT, STRING } from "../utils/schemaTypes";

export default {
  title: IMAGE,
  name: "captionImage",
  type: OBJECT,
  description: "After upload click edit and add the caption.",
  fields: [
    {
      name: "image",
      type: IMAGE,
      title: "Image",
    },
    {
      name: "alt",
      type: STRING,
      title: "Image Caption",
      description:
        "Short description of the image that will be shown if the image does not load.",
    },
  ],
};
