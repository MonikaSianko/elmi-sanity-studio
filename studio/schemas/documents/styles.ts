import { STYLES, STYLES_TITLE } from "../../deskStructure/constants";
import { DOCUMENT } from "../utils/schemaTypes";

export default {
  title: STYLES_TITLE,
  name: STYLES,
  type: DOCUMENT,
  fields: [
    {
      title: "Primary color",
      name: "primaryColor",
      type: "color",
    },
    {
      title: "Secondary color",
      name: "secondaryColor",
      type: "color",
    },
    {
      title: "Background color",
      name: "backgroundColor",
      type: "color",
    },
  ],
};
