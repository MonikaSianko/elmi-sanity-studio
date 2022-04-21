import {
  errorTypes,
  inputTypes,
  validationSettingTypes,
} from "../helpers/lists";
import { ARRAY, OBJECT, STRING } from "../utils/schemaTypes";

export default {
  title: "Form input",
  name: "formInput",
  type: OBJECT,
  fields: [
    { title: "Input label", name: "inputLabel", type: STRING },
    { title: "Input placeholder", name: "inputPlaceholder", type: STRING },
    {
      title: "Input type",
      name: "inpuType",
      type: STRING,
      options: {
        list: inputTypes.map((el) => ({ value: el, title: el })),
      },
    },
    {
      title: "Standard error messages",
      name: "errorMessages",
      type: ARRAY,
      of: [{ type: "error" }],
      validation: (Rule) => Rule.max(errorTypes.length),
    },
    {
      title: "Value length validation",
      name: "validation",
      type: ARRAY,
      of: [{ type: "validationSettings" }],
      validation: (Rule) => Rule.max(validationSettingTypes.length),
    },
  ],
};
