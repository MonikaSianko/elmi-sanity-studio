import {
  HEADER,
  HERO,
  HOME_PAGE,
  HOME_PAGE_TITLE,
} from "../../../deskStructure/constants";
import { homeSectionTypes } from "../../helpers/sectionTypes";

export default {
  title: HOME_PAGE_TITLE,
  name: HOME_PAGE,
  type: "document",
  fields: [
    {
      title: "Page sections",
      name: "homeSections",
      type: "array",
      of: [{ type: "reference", to: homeSectionTypes.map((el) => el) }],
    },
  ],
};
