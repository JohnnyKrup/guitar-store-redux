import { createSelector } from "reselect"
import memoize from "lodash.memoize"

// const COLLECTION_ID_MAP = {
//   "konzert-gitarren": 1000,
//   "flamenco-gitarren": 2000,
//   "kinder-gitarren": 3000,
//   "western-gitarren": 4000,
//   "meister-gitarren": 5000,
// }

const shopSelector = (state) => state.shop

export const collectionsSelector = createSelector(
  [shopSelector],
  (shop) => shop.collections
)

/**
 * const test = {a:1, b:2, c:3}
 * console.log(Object.keys(test)) >> ["a", "b", "c"]
 *
 */
export const collectionsPreviewSelector = createSelector(
  [collectionsSelector],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
)

/**
 * collectionUrlParam is a string i.e. 'western'
 * and we try to find the matching collection ID with the
 * find() function, where we get back the collection that the collection.id
 * macthes the numeric value of the collectionUrlParam
 *
 * Storing data in an Array is not the best solution, when your collections start
 * to grow. i.e. you had 1000 collections and you try to find() the last element
 * you would make the === compare for 999 items before you can access your collection
 * => storing list of data in objects rather than arrays is called: "DataNormalization"
 * @param {*} collectionUrlParam
 */
export const collectionSelector = memoize((collectionUrlParam) =>
  createSelector(
    [collectionsSelector],
    // collections.find(
    //   (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    // )
    (collections) => (collections ? collections[collectionUrlParam] : null)
  )
)
