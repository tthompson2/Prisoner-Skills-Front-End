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
export const REGISTERING = 'REGISTERING';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const PRISONER_IN_COURT = 'PRISONER_IN_COURT';
export const PRISONER_GUILTY = 'PRISONER_GUILTY';
export const PRISONER_INNOCENT = 'PRISONER_INNOCENT';

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

export function signup(username, address, name, password) {
  return (dispatch) => {
    dispatch({type: REGISTERING})
    axios.post(`https://prison-skills.herokuapp.com/auth/register`, { username, address, name, password })
      .then(resolve => {
        localStorage.setItem('token', resolve.data.token)
        dispatch({type: LOGIN_SUCCESS})
      })
      .catch(err => {
        dispatch({type: LOGIN_FAIL, payload: err})
      })
  }
}

export function logout() {
  return(dispatch) => {
    localStorage.removeItem('token')
    dispatch({type: LOGOUT_SUCCESS})
  }
}

export function trial(bodyData) {
  const config = localStorage.getItem('token')
  return(dispatch) => {
    dispatch({type: PRISONER_IN_COURT})
    axios.post('https://prison-skills.herokuapp.com/prisoners', {bodyData, config})
      .then(resolve => {
        dispatch({type: PRISONER_GUILTY, payload: resolve.data})
      })
      .catch(err => {
        dispatch({type: PRISONER_INNOCENT, payload: err})
      })
  }
}
