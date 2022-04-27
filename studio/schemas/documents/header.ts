import { HEADER, HEADER_TITLE, NAVLINKS } from "../../deskStructure/constants";
import { ARRAY, DOCUMENT, REFERENCE, STRING } from "../utils/schemaTypes";

export default {
  title: HEADER_TITLE,
  name: HEADER,
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
      of: [{ type: REFERENCE, to: [{ type: NAVLINKS }] }],
    },
    {
      name: "withIcon",
      title: "Links with icon",
      type: "boolean",
      description: "Choose if links should have icons",
    },
    {
      title: "Logo",
      type: "captionImage",
      name: "logo",
    },
  ],
};
