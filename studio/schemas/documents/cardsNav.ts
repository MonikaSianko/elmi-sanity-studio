import { ARRAY, DOCUMENT, REFERENCE, STRING } from "../utils/schemaTypes";
import {
  CARDS_NAVIGATION_TITLE,
  CARDS_NAVIGATION,
  NAVCARD,
} from "./../../deskStructure/constants";

export default {
  title: CARDS_NAVIGATION_TITLE,
  name: CARDS_NAVIGATION,
  type: DOCUMENT,
  fields: [
    {
      name: "cardsNavName",
      title: "Cards Navigation Section Name",
      type: STRING,
      description:
        "This field serves organizational purpose, this value will not be displayed on the website.",
    },
    {
      name: "navCards",
      title: "Navigation cards",
      type: ARRAY,
      of: [{ type: REFERENCE, to: [{ type: NAVCARD }] }],
    },
  ],
};
