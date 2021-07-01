export default {
    userList: state => state.userList,
    GET_USER_INFO(state) {
        return state.userInfo;
      },
      GET_TOKEN(state) {
        return state.userInfo && state.userInfo.token;
      }
}