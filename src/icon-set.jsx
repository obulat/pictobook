import React from "react";
import {IconWrapper} from './icon-wrapper';
import {IconControls} from "./icon-controls";
import {IconItem} from "./icon-item";

const defaultDisplayNameGetter = (iconName) => iconName;
const defaultCopyValueGetter = (iconName) => `${iconName}.svg`;

export function IconSet({icons, getDisplayName=defaultDisplayNameGetter, getCopyValue=defaultCopyValueGetter, iconClass=''}) {

  const context = {
    getDisplayName,
    getCopyValue,
    iconClass
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

IconSet.Item = IconItem
IconSet.Controls = IconControls
IconSet.Wrapper = IconWrapper
