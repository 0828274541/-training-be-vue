export default {
  SET_BAR_IMAGE(state, payload) {
    state.barImage = payload;
  },
  SET_DRAWER(state, payload) {
    state.drawer = payload;
  },
  SET_SCRIM(state, payload) {
    state.barColor = payload;
  },
  SET_USER_INFO(state, payload) {
    state.userInfo = payload
  },
  RESET_USER_INFO(state) {
    state.userInfo = null
  },
  SHOW_TOASK(state, payload) {
    state.snack = payload
  },
  SET_USER_LIST(state, payload) {
    state.userList = payload;
  },
  SET_CATEGORY_LIST(state, payload) {
    state.categoryList = payload;
  },
  SET_BOOK_LIST(state, payload) {
    state.bookList = payload;
  },
  SET_SEARCH(state, payload) {
    state.search = payload;
  },
}