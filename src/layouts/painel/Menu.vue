<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <template v-for="item in items">
          <v-list-group
            v-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <template v-slot:activator>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ item.text }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <template v-for="(child, i) in item.children">
              <v-list-item :key="i" :to="child.to">
                <v-list-item-action v-if="child.icon">
                  <v-icon>{{ child.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ child.text }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list-group>
          <template v-else>
            <v-list-item :key="item.text" :to="item.to">
              <v-list-item-action>
                <v-icon :color="item.cor">{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "Menu",
  props: {
    drawer: {
      type: Boolean
    }
  },
  data: () => ({
    dialog: false,
    items: [
      {
        icon: "mdi-chart-areaspline",
        text: "Dashboard",
        to: "/dashboard",
        cor: "green",
        permission: [5001, 5003, 5004, 6002]
      },

      {
        icon: "mdi-chevron-up",
        "icon-alt": "mdi-chevron-down",
        text: "Dropdow",
        model: false,
        permission: [2000],
        children: [
          {
            icon: "mdi-send",
            text: "sub",
            to: "/email/gasto/empresa",
            permission: [2001, 4002, 4005, 4004]
          }
        ]
      }
    ]
  })
};
</script>
