import { addParameters } from "@storybook/react";
import "./styles.css";
import "../src/index.css";

addParameters({
  options: {
    brandTitle: "Icon Gallery"
  }
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
