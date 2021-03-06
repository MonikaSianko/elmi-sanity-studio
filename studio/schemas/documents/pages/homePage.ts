import {
  HEADER,
  HERO,
  HOME_PAGE,
  HOME_PAGE_TITLE,
} from "../../../deskStructure/constants";
import { homeSectionTypes } from "../../helpers/sectionTypes";
import { ARRAY, DOCUMENT, REFERENCE } from "../../utils/schemaTypes";

export default {
  title: HOME_PAGE_TITLE,
  name: HOME_PAGE,
  type: DOCUMENT,
  fields: [
    {
      title: "Page sections",
      name: "homeSections",
      type: ARRAY,
      description:
        "Choose sections that you would like to display and move them (draq'n'drop) into desired order.",
      of: [{ type: REFERENCE, to: homeSectionTypes.map((el) => el) }],
    },
  ],
};
