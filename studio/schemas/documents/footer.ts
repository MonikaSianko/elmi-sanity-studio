import { ARRAY, CAPTION_IMAGE, DOCUMENT, STRING } from "../utils/schemaTypes";

export default {
  title: "FOOTER",
  name: "footer",
  type: DOCUMENT,
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
      type: ARRAY,
      of: [{ type: "reference", to: [{ type: "navLinks" }] }],
    },
    {
      title: "Logo",
      type: CAPTION_IMAGE,
      name: "logo",
    },
  ],
};
