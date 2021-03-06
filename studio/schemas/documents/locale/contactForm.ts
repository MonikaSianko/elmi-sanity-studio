import { i18n } from "./../../helpers/documentTranslation";
import {
  CONTACT_FORM,
  CONTACT_FORM_TITLE,
} from "../../../deskStructure/constants";
import { ARRAY, DOCUMENT } from "../../utils/schemaTypes";

export default {
  title: CONTACT_FORM_TITLE,
  name: CONTACT_FORM,
  type: DOCUMENT,
  i18n,
  fields: [
    {
      title: "Inputs",
      name: "inputs",
      type: ARRAY,
      of: [{ type: "formInput" }],
    },
  ],
};
