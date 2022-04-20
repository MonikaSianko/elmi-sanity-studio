import { IMAGE, STRING } from "../utils/schemaTypes";

export default {
  title: IMAGE,
  name: "captionImage",
  type: IMAGE,
  description: "After upload click edit and add the caption.",
  fields: [
    {
      name: "caption",
      type: STRING,
      title: "Caption",
      description:
        "Short description of the image that will be shown if the image does not load.",
    },
  ],
};
