export default {
  title: "Person",
  name: "person",
  type: "object",
  localize: true,
  fields: [
    {
      title: "Name",
      type: "string",
      name: "name",
    },
    {
      title: "Surname",
      type: "string",
      name: "surname",
    },
    {
      title: "Position",
      type: "string",
      name: "position",
    },
    {
      title: "Bio text",
      type: "text",
      name: "bioText",
    },
    {
      title: "Photo",
      name: "photo",
      localize: false,
      type: "captionImage",
    },
  ],
};
