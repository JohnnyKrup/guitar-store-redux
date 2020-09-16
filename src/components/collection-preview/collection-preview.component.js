import React from "react"
import { withRouter } from "react-router-dom"

import CollectionItem from "../collection-item/collection-item.component"

import {
  CollectionPreviewStyle,
  TitleStyle,
  PreviewStyle,
} from "./collection-preview.styles"

const CollectionPreview = ({ title, items, history, match, routeName }) => {
  return (
    <CollectionPreviewStyle>
      <TitleStyle onClick={() => history.push(`${match.url}/${routeName}`)}>
        {title}
      </TitleStyle>
      <PreviewStyle className="preview">
        {
          /**
           * since in our preview we want just 4 items,
           * we use the filter() function, before the map()
           *
           * PERFORMANCE CONCERN
           * Anonymous functions within components get called & rerendered
           * every time the component is called
           */
          items
            .filter((item, idx) => idx < 4)
            .map((item) => (
              <CollectionItem key={item.id} item={item} />
            ))
        }
      </PreviewStyle>
    </CollectionPreviewStyle>
  )
}

export default withRouter(CollectionPreview)
