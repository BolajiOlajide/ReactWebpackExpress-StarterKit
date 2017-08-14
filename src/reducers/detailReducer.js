import * as types from '../constant';
import { initialState } from '../initialState';

const detailReducer = (state = initialState.details, action) => {
  switch(action.type) {
    case types.GET_GIT:
    console.log(action.details);
      return action.details;

    case types.SAVE_DETAIL:
      return [
        ...state,
        Object.assign({}, action.details)
      ];

    case types.DELETE_DETAIL:
      return [
        ...state.filter(detail => detail.id !== action.detail.id),
        Object.assign({})
      ];

    default:
      return state
  }
}

export default detailReducer;
