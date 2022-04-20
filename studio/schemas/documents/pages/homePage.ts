import {
  HEADER,
  HERO,
  HOME_PAGE,
  HOME_PAGE_TITLE,
} from "../../../deskStructure/constants";
import { homeSectionTypes } from "../../helpers/sectionTypes";
import { ARRAY } from "../../utils/schemaTypes";

export default {
  title: HOME_PAGE_TITLE,
  name: HOME_PAGE,
  type: "document",
  fields: [
    {
      title: "Page sections",
      name: "homeSections",
      type: ARRAY,
      of: [{ type: "reference", to: homeSectionTypes.map((el) => el) }],
    },
  ],
};
