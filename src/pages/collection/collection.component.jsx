import React from "react"
import { connect } from "react-redux"

import CollectionItem from "../../components/collection-item/collection-item.component"

import { collectionSelector } from "../../redux/shop/shop.selector"

import "./collection.styles.scss"

const CollectionPage = ({ collection }) => {
  // console.log(collection)
  const { title, items } = collection

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

/**
 * first parameter is the 'state' which is the overall state of the rootReducer
 * second parameter is the 'ownProps' which are all the props that we are wrapping
 * in this current component
 */
const mapStateToProps = (state, ownProps) => ({
  /**
   * collectionSelector() is a function that returns a function
   * the returned function, we will pass in the state [function()(state)],
   * otherwise the returned function would not have access to the overall state
   */
  collection: collectionSelector(ownProps.match.params.collectionId)(state),
})

export default connect(mapStateToProps)(CollectionPage)
