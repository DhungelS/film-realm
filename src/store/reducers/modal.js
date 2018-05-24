import {OPEN_ITEM_MODAL} from '../actions/actionType'

const initialState = {
  selectedItem: null
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case OPEN_ITEM_MODAL:
    return {
      ...state,
      selectedItem: action.item
    }
    default:
    return {
     ...state
    };
  }
}

export default reducer;