import { STRING } from "../utils/schemaTypes";

export default {
  title: "FOOTER",
  name: "footer",
  type: "document",
  fields: [
    {
      name: "footerName",
      title: "Footer Name",
      type: STRING,
      description:
        "This field serves organizational purpose, this value will not be displayed on the website.",
    },
    {
      name: "navLinks",
      title: "Navigation links",
      type: "array",
      of: [{ type: "reference", to: [{ type: "navLinks" }] }],
    },
    {
      title: "Logo",
      type: "captionImage",
      name: "image",
    },
  ],
};
