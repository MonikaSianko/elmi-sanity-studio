import {
  PRODUCTS_PAGE,
  PRODUCTS_PAGE_TITLE,
} from "../../../deskStructure/constants";
import { productsSectionTypes } from "../../helpers/sectionTypes";
import { ARRAY, DOCUMENT, REFERENCE } from "../../utils/schemaTypes";

export default {
  title: PRODUCTS_PAGE_TITLE,
  name: PRODUCTS_PAGE,
  type: DOCUMENT,
  fields: [
    {
      title: "Page sections",
      name: "productsSections",
      description:
        "Choose sections that you would like to display and move them (draq'n'drop) into desired order.",
      type: ARRAY,
      of: [{ type: REFERENCE, to: productsSectionTypes.map((el) => el) }],
    },
  ],
};
