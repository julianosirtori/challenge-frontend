import isPropValid from '@emotion/is-prop-valid';
import { StyleSheetManager } from "styled-components";

export function StyledComponentProvider({children}: ComponentWithChildren){
  function shouldForwardProp(propName:string, target: any) {
    if (typeof target === "string") {
        return isPropValid(propName);
    }
    return true;
  }

  return (
    <StyleSheetManager  shouldForwardProp={shouldForwardProp}>
      {children}
    </StyleSheetManager>
  )
}