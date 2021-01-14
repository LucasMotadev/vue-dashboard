<template>
  <v-app>
    <AppBar @drawer="drawer = !drawer" />
    <Menu :drawer="drawer" />
  </v-app>
</template>

<script>
export default {
  components: {
    AppBar: () => import("./AppBar"),
    Menu: () => import("./Menu")
  },
  data() {
    return {
      drawer: true
    };
  }
};
</script>

<style></style>
