import React from "react"
import { withRouter } from "react-router-dom"

import {
  MenuItemStyle,
  BackgroundImageStyle,
  ContentStyle,
} from "./menu-item.styles"

/**
 * Every tag can have an element style property,
 * this we use to add the background image
 * of our tiles (menuItems)
 * @param {*} param0
 */
const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  // console.log(`${match.url}${slug}`)

  return (
    <MenuItemStyle onClick={() => history.push(`${match.url}${linkUrl}`)}>
      {/* 
      In order for the image transition to work,
      another div needs to be created inside our original outer div.
      This is because we want to increase only the background image
      without the item to be increased in size.
      */}
      <BackgroundImageStyle style={{ backgroundImage: `url(${imageUrl})` }} />
      <ContentStyle>
        <h1 className="title">{title}</h1>
        <span className="subtitle">DETAILS</span>
      </ContentStyle>
    </MenuItemStyle>
  )
}

/**
 * we need withRouter on this component
 * so that we do not need to do any property drilling
 * (passing props through other components, just to bring the property where we need it)
 * this withRouter is like extending this component with additional Router functions
 * similar to React.Component
 * in this case it gives us access to the "history" property that otherwise
 * is only available at the home page level
 */
export default withRouter(MenuItem)
