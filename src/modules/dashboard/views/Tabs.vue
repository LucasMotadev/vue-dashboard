<template>
  <v-main>
    <v-toolbar color="cyan" dark flat>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>J2w</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs v-model="tab" align-with-title>
          <v-tabs-slider color="yellow"></v-tabs-slider>
        
          <v-tab v-for="item in items" :key="item.tab" >
              <v-icon class="mr-2">mdi-{{item.icon}}</v-icon>
            {{ item.tab }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item.tab">
        
          <component :is="item.component" />
       
      </v-tab-item>
    </v-tabs-items>
  </v-main>
</template>
<script>
export default {
  components: {
    Dasboard: () => import("../../modules/dashboard/views/Index"),
    Operacao: () => import("../../modules/dashboard/views/OperacaoModeracao"),
    Maps: () => import("../../modules/dashboard/views/Maps"),
  },
  data() {
    return {
      tab: null,
      items: [
        {
          tab: "Dashboad",
          component: "Dasboard",
          icon: "chart-bar-stacked"
        },
        {
          tab: "Operação & Moderação",
          component: "Operacao",
          icon:"table-edit"
        },
                {
          tab: "Maps",
          component: "Maps",
          icon:"map-search"
        },
      ],
    };
  },
};
</script>