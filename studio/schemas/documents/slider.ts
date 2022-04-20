import { SLIDER_TITLE, SLIDER } from "../../deskStructure/constants";
import { ARRAY, STRING } from "../utils/schemaTypes";

export default {
  title: SLIDER_TITLE,
  name: SLIDER,
  type: "document",
  fields: [
    {
      name: "sliderName",
      title: "Slider Name",
      type: STRING,
      description:
        "This field serves organizational purpose, this value will not be displayed on the website.",
    },
    {
      title: "Slides",
      name: "slides",
      type: ARRAY,
      of: [{ type: "slide" }],
    },
  ],
};
