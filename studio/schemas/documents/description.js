import { i18n } from "../documentTranslation";

export default {
  title: "Description",
  name: "description",
  type: "document",
  i18n,
  fields: [
    {
      name: "desciptionName",
      title: "Description Name",
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
      title: "Text",
      type: "text",
      name: "text",
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
