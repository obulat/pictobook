import React from "react";
import {IconControls} from "./icon-controls";
import {IconItem} from "./icon-item";
import * as icons from "./assets";

/**
 * Converts lowercase dashed icon name into TitleCase name for import
 * @param {string} name Icon name as in 'cc-by'
 */
const getIconSvgString = (name) => {
  const filename = (name.split("-").map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  })).join("");
  return icons[filename];
};

export const IconWrapper = ({iconName, context}) => {
    const {getDisplayName, getCopyValue} = context;
    const displayName = getDisplayName(iconName)
    const copyValue = getCopyValue(iconName)
    const iconSvg = getIconSvgString(iconName)

    return (
      <div className="icon-wrapper sbdocs sbdocs-pb">
          <div className="icon-box sbdocs sbdocs-pb">
              <IconItem iconName={iconName} iconSvg={iconSvg}/>
              <IconControls iconSvg={iconSvg} context={{displayName, copyValue}} />
          </div>
          <div className="icon-name sbdocs sbdocs-pb">{displayName}</div>
      </div>
    )
}

