import { errorTypes } from "../helpers/lists";
import { OBJECT, STRING } from "../utils/schemaTypes";

export default {
  title: "Error",
  name: "error",
  type: OBJECT,
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
