import { NAVLINKS } from "../../deskStructure/constants";
import { ARRAY, CAPTION_IMAGE, DOCUMENT, STRING } from "../utils/schemaTypes";

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
      of: [{ type: "reference", to: [{ type: NAVLINKS }] }],
    },
    {
      title: "Logo",
      type: CAPTION_IMAGE,
      name: "logo",
    },
  ],
};
