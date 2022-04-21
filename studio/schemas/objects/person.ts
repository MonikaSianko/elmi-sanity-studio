import { OBJECT, STRING, TEXT } from "../utils/schemaTypes";

export default {
  title: "Person",
  name: "person",
  type: OBJECT,
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
      type: TEXT,
      name: "bioText",
    },
    {
      title: "Photo",
      name: "photo",
      type: "captionImage",
    },
  ],
};
