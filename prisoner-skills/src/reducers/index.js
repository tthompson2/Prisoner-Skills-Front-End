import {
  FETCH_PRISONERS, FETCH_SUCCESS, FETCH_FAIL,
  PRISONER_IN_COURT, PRISONER_GUILTY, PRISONER_INNOCENT,
  GET_PERSONAL_INFO, GET_PERSONAL_SUCCESS, GET_PERSONAL_FAIL,
  LOGIN_TRY, LOGIN_SUCCESS, LOGIN_FAIL,
} from '../actions'

const initialState = {
   prisoners: [],
   fetchingPrisoners: false,
   fetchingPersonal: false,
   loggingIn: false,
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
        error: null,
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
    case GET_PERSONAL_INFO: {
      return {
        ...state,
        fetchingPersonal: true,
      }
    }
    case GET_PERSONAL_SUCCESS: {
      const newPrisoners = state.prisoners.map(prisoner => prisoner.id === action.payload.id ? action.payload : prisoner)
      return {
        ...state,
        fetchingPersonal: false,
        error: null,
        prisoners: newPrisoners,
      }
    }
    case GET_PERSONAL_FAIL: {
      return {
        ...state,
        fetchingPersonal: false,
        error: true,
      }
    }
    case LOGIN_TRY: {
      return {
        ...state,
        loggingIn: true,
      }
    }case LOGIN_SUCCESS: {
      return {
        ...state,
        loggingIn: false,
        error: null,
      }
    }case LOGIN_FAIL: {
      return {
        ...state,
        loggingIn: false,
        error: true,
      }
    }
    default: {
      return state
    }
  }
}
