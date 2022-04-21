import { i18n } from "./../../helpers/documentTranslation";
import {
  CONTACT_DETAILS,
  CONTACT_DETAILS_TITLE,
} from "../../../deskStructure/constants";
import { ARRAY, DOCUMENT, STRING } from "../../utils/schemaTypes";

export default {
  title: CONTACT_DETAILS_TITLE,
  name: CONTACT_DETAILS,
  type: DOCUMENT,
  i18n,
  fields: [
    {
      name: "contactDetailsName",
      title: "Contact details name",
      type: STRING,
      description:
        "This field serves organizational purpose, this value will not be displayed on the website.",
    },
    {
      name: "contactCta",
      title: "Contact CTA",
      type: "cta",
    },
    {
      title: "Contact By",
      name: "contactBy",
      type: ARRAY,
      of: [{ type: "cta" }],
    },
    {
      title: "Longtitute",
      name: "lng",
      type: STRING,
    },
    {
      title: "Latitute",
      name: "lat",
      type: STRING,
    },
  ],
};
