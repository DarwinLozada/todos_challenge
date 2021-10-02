import { ADD_ITEM, FILTER_ITEMS, REMOVE_ITEM, SET_ITEMS } from "./actions";

export default function todosReducer(state, action) {
  switch (action.type) {
    case SET_ITEMS: {
      return {
        ...state,
        items: state.items.concat(action.payload.items),
      };
    }

    case ADD_ITEM: {
      console.log("add", state);
      return {
        ...state,
        items: state.items.concat([
          {
            name: action.payload,
            id:
              state.items.length > 0
                ? state.items[state.items.length - 1].id + 1
                : 1,
            isCompleted: false,
          },
        ]),
      };
    }

    case REMOVE_ITEM: {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    }

    case FILTER_ITEMS: {
      return {
        ...state,
        items: state.items.filter((item) => item.name.includes(action.payload)),
      };
    }

    default: {
      return state;
    }
  }
}
