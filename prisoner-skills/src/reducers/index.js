// import { CALL_SMURFS, CALL_SUCCESS, CALL_FAIL, MOVING_IN, MOVE_SUCCESS, MOVE_FAIL } from '../actions'

const initialState = {
   prisoners: [],
   fetchingPrisoners: false,
   addingPrisoner: false,
   updatingPrisoner: false,
   deletingPrisoner: false,
   error: null,
 }

export default (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state
    }
  }
}
