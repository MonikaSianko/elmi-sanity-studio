import { CAPTION_IMAGE, STRING } from "../utils/schemaTypes";

export default {
  title: "Person",
  name: "person",
  type: "object",
  fields: [
    {
      title: "Name",
      type: STRING,
      name: "name",
    },
    {
      title: "Surname",
      type: STRING,
      name: "surname",
    },
    {
      title: "Position",
      type: STRING,
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
      type: CAPTION_IMAGE,
    },
  ],
};
