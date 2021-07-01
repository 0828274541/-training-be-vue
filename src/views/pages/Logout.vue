  <script>

  const { authApi } = require("../../apis");

  export default {
    name: "PagesLogout",
    mounted: async function () {
        const result = await authApi.logout();
        if (result.data.code === 200) {
          this.$store.commit("SET_USER_INFO", {});
          this.$router.push("/pages/login");
        }
    },
  };
  </script>
