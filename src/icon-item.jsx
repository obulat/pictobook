import React from "react";

export const IconItem = ({iconSvg}) => {
  return (
      <div className="icon sbdocs sbdocs-ig-icon" dangerouslySetInnerHTML={{__html: iconSvg}} />
  );
}
