import { HERO, HERO_TITLE } from "../../../deskStructure/constants";
import { i18n } from "../../helpers/documentTranslation";

export default {
  title: HERO_TITLE,
  name: HERO,
  type: "document",
  i18n,
  fields: [
    {
      name: "heroName",
      title: "Hero Name",
      type: "string",
      description:
        "This field serves organizational purpose, this value will not be displayed on the website.",
    },
    {
      title: "Title",
      type: "string",
      name: "title",
    },
    {
      title: "Subtitle",
      type: "string",
      name: "subtitle",
    },
    {
      title: "CTA button",
      type: "array",
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
