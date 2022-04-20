import { NAVLINKS, NAVLINKS_TITLE } from "../../../deskStructure/constants";
import { i18n } from "../../helpers/documentTranslation";
import { STRING } from "../../utils/schemaTypes";

export default {
  title: NAVLINKS_TITLE,
  name: NAVLINKS,
  type: "document",
  i18n,
  fields: [
    {
      name: "linkName",
      title: "Link Name",
      type: STRING,
      description:
        "This field serves organizational purpose, this value will not be displayed on the website.",
    },
    {
      title: "Navigation Link",
      type: "link",
      name: "navLink",
    },
  ],
};
