import { ARRAY, DOCUMENT, STRING } from "../utils/schemaTypes";

export default {
  title: "HEADER",
  name: "header",
  type: DOCUMENT,
  fields: [
    {
      name: "headerName",
      title: "Header Name",
      type: STRING,
      description:
        "This field serves organizational purpose, this value will not be displayed on the website.",
    },
    {
      name: "navLinks",
      title: "Navigation links",
      type: ARRAY,
      of: [{ type: "reference", to: [{ type: "navLinks" }] }],
    },
    {
      title: "Logo",
      type: "captionImage",
      name: "image",
    },
  ],
};
