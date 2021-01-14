<template>
  <v-app id="inspire">
    <notifications />
    <simplesLoad />
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",

  data() {
    return {};
  }
};
</script>
