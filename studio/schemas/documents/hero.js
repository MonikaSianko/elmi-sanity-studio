import { i18n } from "../documentTranslation";

export default {
  title: "Hero",
  name: "hero",
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
