//https://styled-components.com/docs/faqs#shouldforwardprop-is-no-longer-provided-by-default

import isPropValid from "@emotion/is-prop-valid";
import { StyleSheetManager } from "styled-components";

export function StylesManager({ children }: { children: React.ReactNode }) {
  function shouldForwardProp(propName: string, target: unknown) {
    if (typeof target === "string") {
      return isPropValid(propName);
    }
    return true;
  }

  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      {children}
    </StyleSheetManager>
  );
}
