import {
  DESCRIPTION,
  DESCRIPTION_TITLE,
} from "../../../deskStructure/constants";
import { i18n } from "../../helpers/documentTranslation";

export default {
  title: DESCRIPTION_TITLE,
  name: DESCRIPTION,
  type: "document",
  i18n,
  fields: [
    {
      name: "desciptionName",
      title: "Description Name",
      type: "string",
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
      type: "array",
      name: "ctaButton",
      of: [{ type: "cta" }],
    },
  ],
};
