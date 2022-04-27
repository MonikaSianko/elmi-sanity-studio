import { FOOTER, FOOTER_TITLE } from "../../deskStructure/constants";
import { ARRAY, DOCUMENT, REFERENCE, STRING } from "../utils/schemaTypes";

export default {
  title: FOOTER_TITLE,
  name: FOOTER,
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
      of: [{ type: REFERENCE, to: [{ type: "navLinks" }] }],
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
