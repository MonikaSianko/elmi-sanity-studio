import {
  DESCRIPTION,
  DESCRIPTION_TITLE,
} from "../../../deskStructure/constants";
import { i18n } from "../../helpers/documentTranslation";
import { ARRAY, STRING } from "../../utils/schemaTypes";

export default {
  title: DESCRIPTION_TITLE,
  name: DESCRIPTION,
  type: "document",
  i18n,
  fields: [
    {
      name: "desciptionName",
      title: "Description Name",
      type: STRING,
      description:
        "This field serves organizational purpose, this value will not be displayed on the website.",
    },
    {
      title: "Description",
      name: "simpleDescription",
      type: "simpleDescription",
    },
    {
      title: "CTA button",
      type: ARRAY,
      name: "ctaButton",
      of: [{ type: "cta" }],
    },
  ],
};
