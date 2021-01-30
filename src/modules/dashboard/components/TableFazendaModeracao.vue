<template>
  <v-container>
    <v-card>
      <v-data-table
        :headers="headers"
        :items="items"
        :items-per-page="5"
        class="elevation-1"
      >
        <template v-slot:[`item.action`]="{ item }">
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                @click="edit(item)"
                outlined
                icon
                color="warning"
                dark
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-pen</v-icon>
              </v-btn>
            </template>
            <span>Editar</span>
          </v-tooltip>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import { barramento } from "../barramento";
import serviceFazendoModeracao from "../services/tableFazendoModeracao";
export default {
  data() {
    return {
      items: [],
      headers: [
        {
          text: "Empresa",
          value: "empresa"
        },
        {
          text: "Valor Min",
          value: "qt_min"
        },
        {
          text: "Valor Max",
          value: "qt_max"
        },
        {
          text: "Ações",
          value: "action",
          align: "end"
        }
      ]
    };
  },
  methods: {
    async getFazendas(e = {}) {
      console.log("clicou", e.id_empresa);
      this.items = await serviceFazendoModeracao.get(e.id_empresa);
    }
  },

  created() {
    this.getFazendas();
    barramento.$on("click:rowTableEmpresaModeracao", this.getFazendas);
  }
};
</script>

<style></style>
