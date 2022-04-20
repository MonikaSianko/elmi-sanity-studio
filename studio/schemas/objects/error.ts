import { errorTypes } from "../helpers/lists";

export default {
  title: "Error",
  name: "error",
  type: "object",
  fields: [
    {
      title: "Text",
      name: "text",
      type: "string",
    },
    // {
    //   title: "error type",
    //   name: "errorType",
    //   type: "string",
    //   options: {
    //     list: errorTypes.map((type) => ({ value: type, title: type })),
    //   },
    // },
  ],
};
