import * as types from '../constant';
import initialState from '../initialState';

const detailReducer = (state = initialState.detail, action) => {
  switch(action.type) {
    case types.GET_DETAIL:
      return action.details;

    case types.SAVE_DETAIL:
      return [
        ...state,
        Object.assign({}, action.detail)
      ]

    case types.DELETE_DETAIL:
      return [
        ...state.filter(detail => detail.id !== action.detail.id),
        Object.assign({})
      ]
  }
}

export default detailReducer;
