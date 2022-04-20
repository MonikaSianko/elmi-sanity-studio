import { i18n } from "./../../helpers/documentTranslation";
import {
  CONTACT_DETAILS,
  CONTACT_DETAILS_TITLE,
} from "../../../deskStructure/constants";

export default {
  title: CONTACT_DETAILS_TITLE,
  name: CONTACT_DETAILS,
  type: "document",
  i18n,
  fields: [
    {
      title: "Description",
      name: "description",
      type: "simpleDescription",
    },
    {
      title: "Contact By",
      name: "contactBy",
      type: "array",
      of: [{ type: "link" }],
    },
  ],
};
