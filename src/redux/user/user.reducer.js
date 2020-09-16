import { UserActionTypes } from "./user.types"

const INITIAL_STATE = {
  currentUser: null,
}

/**
 * state = INITIAL_STATE is a way to set a default value,
 * in case state is not passed into the function.
 * If null is passed into the function as a first parameter,
 * it is considered as a value and the INITAL_STATE will not be used.
 *
 * action is an object containing a type which is a string
 * that will be checked in the switch
 * if the value matches we want to return a new object in order to
 * trigger the re-render function of the DOM, by just changing the value
 * and sending back the same value, the DOM might not be re-rendered.
 *
 * first thing is to spread all the properties of the state => ...state
 * & then as a second argument, update the prop that we really want to update
 * by assigning the payload property of the action
 * @param {*} state
 * @param {*} action
 */
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      }

    default:
      return state
  }
}

export default userReducer
