import {
  CONTACT_PAGE,
  CONTACT_PAGE_TITLE,
} from "../../../deskStructure/constants";
import {
  contactSectionTypes,
  servicesSectionTypes,
} from "../../helpers/sectionTypes";
import { ARRAY, DOCUMENT, REFERENCE } from "../../utils/schemaTypes";

export default {
  title: CONTACT_PAGE_TITLE,
  name: CONTACT_PAGE,
  type: DOCUMENT,
  fields: [
    {
      title: "Page sections",
      name: "productsSections",
      description:
        "Choose sections that you would like to display and move them (draq'n'drop) into desired order.",
      type: ARRAY,
      of: [{ type: REFERENCE, to: contactSectionTypes.map((el) => el) }],
    },
  ],
};
