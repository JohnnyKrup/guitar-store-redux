import React from "react"
import { Route } from "react-router-dom"
import { connect } from "react-redux"

import { updateCollections } from "../../redux/shop/shop.actions"

import WithSpinner from "../../components/with-spinner/with.spinner.component"

import CollectionsOverview from "../../components/collections-overview/collections-overview.component"
import Collection from "../collection/collection.component"

import {
  firestore,
  convertCollcetionsSnapshotToMap,
} from "../../firebase/firebase.utils"

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionWithSpinner = WithSpinner(Collection)

/**
 * we have access to the match property because in App.js
 * the ShopPage is <Route path="/shop" component={ShopPage} /> passed as
 * a Component in a Route and automatically Route passes match / history / location as
 * properties to its component
 * @param {*} param0
 */
class ShopPage extends React.Component {
  // this is a short version of invoking constructor(){super() state: {}}
  // react will call constructor and super for us
  state = {
    loading: true,
  }

  unsubscribeFromSnapshot = null

  componentDidMount() {
    /**
     * Prepare data from firebase, so that we can use it in our application
     * this way we can get rid of the static data stored in the frontend
     */
    const { updateCollections } = this.props
    const collectionRef = firestore.collection("collections")

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        // console.log(snapshot)
        const collectionsMap = convertCollcetionsSnapshotToMap(snapshot)
        updateCollections(collectionsMap)
        this.setState({ loading: false })
      }
    )
  }

  // console.log(match)
  render() {
    const { match } = this.props
    const { loading } = this.state
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
})

export default connect(null, mapDispatchToProps)(ShopPage)
