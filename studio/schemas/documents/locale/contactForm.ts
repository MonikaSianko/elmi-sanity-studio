import { i18n } from "./../../helpers/documentTranslation";
import {
  CONTACT_FORM,
  CONTACT_FORM_TITLE,
} from "../../../deskStructure/constants";

export default {
  title: CONTACT_FORM_TITLE,
  name: CONTACT_FORM,
  type: "document",
  i18n,
  fields: [
    {
      title: "Validation messages",
      name: "errors",
      type: "array",
      of: [{ type: "error" }],
    },
  ],
};
