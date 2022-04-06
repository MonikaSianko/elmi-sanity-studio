export default {
  title: "HEADER",
  name: "header",
  type: "document",
  fields: [
    {
      name: "headerName",
      title: "Header Name",
      type: "string",
      description:
        "This field serves organizational purpose, this value will not be displayed on the website.",
    },
    {
      name: "navLinks",
      title: "Navigation links",
      type: "array",
      of: [{ type: "reference", to: [{ type: "navLinks" }] }],
    },
    {
      title: "Logo",
      type: "captionImage",
      name: "image",
    },
  ],
};
