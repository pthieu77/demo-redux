export const ADD_DATA = 'ADD_DATA'
export const TOGGLE_STATUS = 'TOGGLE_STATUS'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
  }

export function addData (mang) {
    return {
        type: ADD_DATA,
        mang
    }
}

export function toggleStatusAction (id) {
    return {
        type: TOGGLE_STATUS,
        payload: {
          id,
        }
    }
}
// export const toggleStatuschange = (isToggle) => {
//     return {
//       type: TOGGLE_STATUS,
//       isToggle: isToggle,
//     };
//   };
// export const toggleStatus = (isToggle) => {
//     return (dispatch) => {
//       dispatch(toggleStatuschange(isToggle));
      
//     };
//   };
