import axios from 'axios';

// Get list of prisoners from server
export const FETCH_PRISONERS = 'FETCH_PRISONERS';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';
export const GET_PERSONAL_INFO = 'GET_PERSONAL_INFO';
export const GET_PERSONAL_SUCCESS = 'GET_PERSONAL_SUCCESS';
export const GET_PERSONAL_FAIL = 'GET_PERSONAL_FAIL';
export const LOGIN_TRY = 'LOGIN_TRY';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

// Add a prisoner
// export const PRISONER_IN_COURT = 'PRISONER_IN_COURT';
// export const PRISONER_GUILTY = 'PRISONER_GUILTY';
// export const PRISONER_INNOCENT = 'PRISONER_INNOCENT';

export function prisonLineup() {
  return (dispatch) => {
    dispatch({type: FETCH_PRISONERS})
    axios.get('https://prison-skills.herokuapp.com/prisoners')
      .then(resolve => {
        dispatch({type: FETCH_SUCCESS, payload: resolve.data})
      })
      .catch(err => {
        dispatch({type: FETCH_FAIL, payload: err})
      })
  }
}

export function personalInfo(id) {
  return (dispatch) => {
    dispatch({type: GET_PERSONAL_INFO})
    axios.get(`https://prison-skills.herokuapp.com/prisoners/${id}`)
      .then(resolve => {
        dispatch({type: GET_PERSONAL_SUCCESS, payload: resolve.data})
      })
      .catch(err => {
        dispatch({type: GET_PERSONAL_FAIL, payload: err})
      })
  }
}

export function login(username, password) {
  return (dispatch) => {
    dispatch({type: LOGIN_TRY})
    axios.post(`https://prison-skills.herokuapp.com/auth/login`, { username, password })
      .then(resolve => {
        localStorage.setItem('token', resolve.data.token)
        dispatch({type: LOGIN_SUCCESS})
      })
      .catch(err => {
        dispatch({type: LOGIN_FAIL, payload: err})
      })
  }
}

// export function smurfMeeting() {
//   return (dispatch) => {
//     dispatch({type: CALL_SMURFS})
//     axios.get('http://localhost:3333/smurfs')
//       .then((res) => {
//         dispatch({type: CALL_SUCCESS, payload: res.data})
//       })
//       .catch((err) => {
//         dispatch({type: CALL_FAIL, payload: err})
//       })
//   }
// }
//
// export function smurfMovesIn(name, age, height) {
//   return (dispatch) => {
//     dispatch({type: MOVING_IN})
//     axios.post('http://localhost:3333/smurfs', { name, age, height })
//       .then((res) => {
//         dispatch({type: MOVE_SUCCESS, payload: res.data})
//       })
//       .catch((err) => {
//         dispatch({type: MOVE_FAIL, payload: err})
//       })
//   }
// }
