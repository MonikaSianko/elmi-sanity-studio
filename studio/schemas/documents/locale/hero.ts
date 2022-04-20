import { HERO, HERO_TITLE } from "../../../deskStructure/constants";
import { i18n } from "../../helpers/documentTranslation";
import { ARRAY, STRING } from "../../utils/schemaTypes";

export default {
  title: HERO_TITLE,
  name: HERO,
  type: "document",
  i18n,
  fields: [
    {
      name: "heroName",
      title: "Hero Name",
      type: STRING,
      description:
        "This field serves organizational purpose, this value will not be displayed on the website.",
    },
    {
      title: "Title",
      type: STRING,
      name: "title",
    },
    {
      title: "Subtitle",
      type: STRING,
      name: "subtitle",
    },
    {
      title: "CTA button",
      type: ARRAY,
      name: "ctaButton",
      of: [{ type: "cta" }],
    },
    {
      title: "Image",
      type: "captionImage",
      name: "image",
    },
  ],
};
