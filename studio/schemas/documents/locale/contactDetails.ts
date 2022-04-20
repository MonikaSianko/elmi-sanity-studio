import { i18n } from "./../../helpers/documentTranslation";
import {
  CONTACT_DETAILS,
  CONTACT_DETAILS_TITLE,
} from "../../../deskStructure/constants";
import { ARRAY, STRING } from "../../utils/schemaTypes";

export default {
  title: CONTACT_DETAILS_TITLE,
  name: CONTACT_DETAILS,
  type: "document",
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
      title: "Description",
      name: "description",
      type: "simpleDescription",
    },
    {
      title: "Contact By",
      name: "contactBy",
      type: ARRAY,
      of: [{ type: "link" }],
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
