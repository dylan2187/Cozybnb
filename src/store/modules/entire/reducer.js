import * as actionTypes from './constants'
const initialState = {
  currentPage: 0, //当前页码
  totalCount: 0, //总数据个数
  roomList: [], //房间列表
}

function reducer(state = initialState, action) {
  switch (action.tyle) {
    case actionTypes.CHANGE_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }
    case actionTypes.CHANGE_TOTAL_COUNT:
      return { ...state, totalCount: action.totalCount }
    case actionTypes.CHANGE_ROOM_LIST:
      return { ...state, totalCount: action.roomList }
    default:
      return state
  }
}

export default reducer
