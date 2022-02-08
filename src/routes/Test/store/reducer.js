import * as constants from './constants';

const defaultState = {
  value: '',
}

const changeState = (state = defaultState, action) => {
  const { type } = action;
  const newState = JSON.parse(JSON.stringify(state));
  switch (type) {
    case constants.UPDATE_TEST:
      newState.value = action.value;
      return newState;
    default:
      return state;
  }
}

export default changeState;