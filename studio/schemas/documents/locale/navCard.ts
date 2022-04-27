import { NAVCARD, NAVCARD_TITLE } from "../../../deskStructure/constants";
import { i18n } from "../../helpers/documentTranslation";
import { DOCUMENT, STRING } from "../../utils/schemaTypes";

export default {
  title: NAVCARD_TITLE,
  name: NAVCARD,
  type: DOCUMENT,
  i18n,
  fields: [
    {
      name: "navCardName",
      title: "Navigation Card Name",
      type: STRING,
      description:
        "This field serves organizational purpose, this value will not be displayed on the website.",
    },
    {
      title: "Path",
      type: STRING,
      name: "path",
      description: "Path should not be translated",
    },
    {
      title: "Button text",
      name: "buttonText",
      type: STRING,
      description: "Can be left empty. If only icon should be displayed.",
    },
    {
      title: "Icon",
      name: "navCardIcon",
      type: "captionImage",
      description: "SVG file. Icon should be in target color",
    },
  ],
};
