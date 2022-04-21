import {
  SERVICES_PAGE,
  SERVICES_PAGE_TITLE,
} from "../../../deskStructure/constants";
import { servicesSectionTypes } from "../../helpers/sectionTypes";
import { ARRAY, DOCUMENT, REFERENCE } from "../../utils/schemaTypes";

export default {
  title: SERVICES_PAGE_TITLE,
  name: SERVICES_PAGE,
  type: DOCUMENT,
  fields: [
    {
      title: "Page sections",
      name: "productsSections",
      description:
        "Choose sections that you would like to display and move them (draq'n'drop) into desired order.",
      type: ARRAY,
      of: [{ type: REFERENCE, to: servicesSectionTypes.map((el) => el) }],
    },
  ],
};
