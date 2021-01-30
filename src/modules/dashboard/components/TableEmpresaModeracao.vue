<template>
  <v-container>
    <v-card>
      <v-card-title primary-title> Moderação </v-card-title>
      <v-data-table
        :headers="headers"
        :items="items"
        :items-per-page="5"
        class="elevation-1"
        @click:row="fetch($event)"
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
import sericeTableEmpresaModeracao from "../services/tableEmpresaModeracao";
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
          text: "Operação",
          value: "operacao"
        },
        {
          text: "Moderação",
          value: "moderacao"
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
    fetch(item) {
      barramento.$emit("click:rowTableEmpresaModeracao", item);
    },

    getEmpresaModeracao() {
      this.items = sericeTableEmpresaModeracao.get();
    }
  },
  created() {
    this.getEmpresaModeracao();
  }
};
</script>

<style></style>
