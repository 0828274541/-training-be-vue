export default {
  userList: state => state.userList,
  GET_USER_INFO(state) {
    return state.userInfo;
  },
  GET_TOKEN(state) {
    return state.userInfo && state.userInfo.token;
  },
  GET_USER_LIST(state) {
    return state.userList;
  },
  GET_CATEGORY_LIST(state) {
    return state.categoryList;
  },
  GET_BOOK_LIST(state) {
    return state.bookList;
  },
  GET_SEARCH(state) {
    return state.search;
  },
}