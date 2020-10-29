import * as React from "react";
import {IconWrapper} from './icon-wrapper';

const defaultDisplayNameGetter = (iconName) => iconName;
const defaultCopyValueGetter = (iconName) => `${iconName}.svg`;

export function IconSet({icons, getDisplayName, getCopyValue}) {
  getDisplayName = getDisplayName || defaultDisplayNameGetter
  getCopyValue = getCopyValue || defaultCopyValueGetter
  const context = {
    getDisplayName,
    getCopyValue
  }
  return (
    <div className="icon-set sbdocs sbdocs-pb">
      { icons && icons.map ((icon) => (
          <IconWrapper key={icon} iconName={icon} context={context}/>
        ))
      }
    </div>
  )
}
