import { FETCH_PRISONERS, FETCH_SUCCESS, FETCH_FAIL, PRISONER_IN_COURT, PRISONER_GUILTY, PRISONER_INNOCENT } from '../actions'

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
    case FETCH_PRISONERS: {
      return {
        ...state,
        fetchingPrisoners: true
      }
    }
    case FETCH_SUCCESS: {
      return {
        ...state,
        fetchingPrisoners: false,
        error: false,
        prisoners: action.payload
      }
    }
    case FETCH_FAIL: {
      return {
        ...state,
        fetchingPrisoners: false,
        error: true
      }
    }
    default: {
      return state
    }
  }
}
