import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initState = {
  items: [],
  item: {}
};

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };

    case NEW_POST:
      return;

    default:
      return state;
  }
};
