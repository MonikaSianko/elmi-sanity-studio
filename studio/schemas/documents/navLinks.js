import { i18n } from "../documentTranslation";

export default {
  title: "NAVIGATION LINKS",
  name: "navLinks",
  type: "document",
  i18n,
  fields: [
    {
      name: "linkName",
      title: "Link Name",
      type: "string",
      description:
        "This field serves organizational purpose, this value will not be displayed on the website.",
    },
    {
      title: "Navigation Link",
      type: "link",
      name: "navLink",
    },
  ],
};
