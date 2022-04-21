import { ABOUT_PAGE, ABOUT_PAGE_TITLE } from "../../../deskStructure/constants";
import { aboutSectionTypes } from "../../helpers/sectionTypes";
import { ARRAY, DOCUMENT, REFERENCE } from "../../utils/schemaTypes";

export default {
  title: ABOUT_PAGE_TITLE,
  name: ABOUT_PAGE,
  type: DOCUMENT,
  fields: [
    {
      title: "Page sections",
      name: "productsSections",
      description:
        "Choose sections that you would like to display and move them (draq'n'drop) into desired order.",
      type: ARRAY,
      of: [{ type: REFERENCE, to: aboutSectionTypes.map((el) => el) }],
    },
  ],
};
