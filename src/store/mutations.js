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
  SET_USERLIST(state, payload) {
    state.userList = payload;
  },
  SET_USER_INFO(state, payload) {
    state.userInfo = payload
  },
  RESET_USER_INFO(state) {
    state.userInfo = null
  },
  SHOW_TOASK(state, payload) {
    state.snack = payload
  }
}