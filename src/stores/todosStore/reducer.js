import {
  ADD_ITEM,
  CHECK_ITEM,
  REMOVE_ITEM,
  SET_ITEMS,
  UNCHECK_ITEM,
} from "./actions";

export default function todosReducer(state, action) {
  switch (action.type) {
    case SET_ITEMS: {
      return {
        ...state,
        items: state.items.concat(action.payload.items),
      };
    }

    case ADD_ITEM: {
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

    case CHECK_ITEM: {
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              isCompleted: true,
            };
          }
          return item;
        }),
      };
    }

    case UNCHECK_ITEM: {
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              isCompleted: false,
            };
          }
          return item;
        }),
      };
    }

    default: {
      return state;
    }
  }
}
