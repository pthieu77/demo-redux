import * as keys from '../actions/action'

const todoApp = (state = [], action) => {
  // console.log(action, state);
  switch (action.type) {
    // case keys.VisibilityFilters.SHOW_ALL:
    //   return {
    //       mang: DATA
    //   }
    // case keys.ADD_DATA:
    // return Object.assign({}, state, {
    //     todos: [
    //     ...state.mang,
    //     {
    //         mang: action.mang,
    //         completed: false
    //     }
    //     ]
    // })

    
    case keys.TOGGLE_STATUS:
      return {
        ...state,// ...state => giữ lại tất cả các state còn lại (trừ cái thằng đang xử lý)
        mang: state.mang.map((item) => item.id === action.payload.id ? {
          ...item,//=> giữ nguyên các thuộc tính khác trừ isToggle
          isToggle: !item.isToggle
        } : item)
    }


    default:
      return state
  }
}

export default todoApp;