import { errorTypes } from "../helpers/lists";
import { STRING } from "../utils/schemaTypes";

export default {
  title: "Error",
  name: "error",
  type: "object",
  fields: [
    {
      title: "Error type",
      name: "errorType",
      type: STRING,
      options: {
        list: errorTypes.map((type) => ({ value: type, title: type })),
      },
    },
    {
      title: "Error message",
      name: "errorMessage",
      type: STRING,
    },
  ],
};
