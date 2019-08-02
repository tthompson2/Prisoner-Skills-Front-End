import {
  FETCH_PRISONERS, FETCH_SUCCESS, FETCH_FAIL,
  PRISONER_IN_COURT, PRISONER_GUILTY, PRISONER_INNOCENT,
  GET_PERSONAL_INFO, GET_PERSONAL_SUCCESS, GET_PERSONAL_FAIL,
  LOGIN_TRY, LOGIN_SUCCESS, LOGIN_FAIL,
  REGISTERING,
  LOGOUT_SUCCESS,
  UPDATE_PRISONER, UPDATE_SUCCESS, UPDATE_FAIL,
  ATTEMPT_BREAKOUT, BREAKOUT_SUCCESS, BREAKOUT_FAIL,
} from '../actions'

const initialState = {
   prisoners: [],
   fetchingPrisoners: false,
   fetchingPersonal: false,
   loggingIn: false,
   loggedIn: localStorage.token === undefined
              ? false
              : true,
   registering: false,
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
        loggedIn: true,
        registering: false,
        error: null,
      }
    }case LOGIN_FAIL: {
      return {
        ...state,
        loggingIn: false,
        registering: false,
        error: true,
      }
    }
    case REGISTERING: {
      return {
        ...state,
        registering: true,
      }
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        loggedIn: false,
      }
    }
    case PRISONER_IN_COURT: {
      return {
        ...state,
        addingPrisoner: true,
      }
    }
    case PRISONER_GUILTY: {
      const newPopulation = state.prisoners.push(action.payload)
      return {
        ...state,
        addingPrisoner: false,
        prisoners: newPopulation,
        error: null,
      }
    }
    case PRISONER_INNOCENT: {
      return {
        ...state,
        addingPrisoner: false,
        error: true
      }
    }
    case UPDATE_PRISONER: {
      return {
        ...state,
        updatingPrisoner: true,
      }
    }
    case UPDATE_SUCCESS: {
      // server returns 1 or 0 so I need to manually update state or do another get request
      const newguy = {
        ...state.prisoners.find( p => String(p.id) === action.payload.id),
        name: action.payload.name,
        prison_id: action.payload.prison_id,
        canHaveWorkLeave: action.payload.canHaveWorkLeave,
      }
      const updatedPrisoners = state.prisoners.map(prisoner => String(prisoner.id) === action.payload.id ? newguy : prisoner)
      return {
        ...state,
        prisoners: updatedPrisoners,
        updatingPrisoner: false,
        error: null
      }
    }
    case UPDATE_FAIL: {
      return {
        ...state,
        updatingPrisoner: false,
        error: true,
      }
    }
    case ATTEMPT_BREAKOUT: {
      return {
        ...state,
        deletingPrisoner: false,
        error: true,
      }
    }
    case BREAKOUT_SUCCESS: {
      return {
        ...state,
        deletingPrisoner: false,
        error: true,
      }
    }
    case BREAKOUT_FAIL: {
      return {
        ...state,
        deletingPrisoner: false,
        error: true,
      }
    }
    default: {
      return state
    }
  }
}
