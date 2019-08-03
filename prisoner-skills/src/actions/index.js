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
export const UPDATE_PRISONER = 'UPDATE_PRISONER';
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
export const UPDATE_FAIL = 'UPDATE_FAIL';
export const ATTEMPT_BREAKOUT = "ATTEMPT_BREAKOUT";
export const BREAKOUT_SUCCESS = "BREAKOUT_SUCCESS";
export const BREAKOUT_FAIL = "BREAKOUT_FAIL";

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

export function trial(name, prisonID) {
  const config = localStorage.getItem('token')
  return(dispatch) => {
    dispatch({type: PRISONER_IN_COURT})
    axios.post('https://prison-skills.herokuapp.com/prisoners',
      {
      	name: name,
      	prison_id: prisonID,
      }, {
      	headers: {
      		authorization: config
      	}
      }
    )
    .then(resolve => {
      dispatch({type: PRISONER_GUILTY})
    })
    .catch(err => {
      dispatch({type: PRISONER_INNOCENT, payload: err})
    })
  }
}

export function update(name, prison_id, canHaveWorkLeave, id) {
  const config = localStorage.getItem('token')
  return(dispatch) => {
    dispatch({type: UPDATE_PRISONER})
    axios.put(`https://prison-skills.herokuapp.com/prisoners/${id}`,
      {
      	name: name,
      	prison_id: prison_id,
      	canHaveWorkLeave: canHaveWorkLeave,
    }, {
      headers: {
        authorization: config
      }
    })
		.then(resolve => {
			dispatch({type: UPDATE_SUCCESS, payload: {name, prison_id, canHaveWorkLeave, id}})
			})
		.catch((err) => {
      dispatch({type: UPDATE_FAIL, payload: err})
		})
  }
}

export function freetheprisoner(id) {
  const config = localStorage.getItem('token')
  return(dispatch) => {
    dispatch({type: ATTEMPT_BREAKOUT})
    axios.delete(`https://prison-skills.herokuapp.com/prisoners/${id}`,
      {
      prison_id: id
    }, {
    	headers: {
    		authorization: config
    	}
    })
    .then(resolve => {
      dispatch({type: BREAKOUT_SUCCESS, payload: resolve.data})
    })
    .catch(err => {
      dispatch({type: BREAKOUT_FAIL, payload: err})
    })
  }
}
