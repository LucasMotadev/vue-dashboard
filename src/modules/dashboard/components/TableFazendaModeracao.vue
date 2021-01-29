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
export default {
  data() {
    return {
      items: [
        {
          empresa: "Porquinhos li",
          operacao: "Nao consta",
          moderacao: "consta"
        },
        {
          empresa: "Porquinhos li",
          operacao: "Nao consta",
          moderacao: "consta"
        },
        {
          empresa: "Porquinhos li",
          operacao: "Nao consta",
          moderacao: "consta"
        },
        {
          empresa: "Porquinhos li",
          operacao: "Nao consta",
          moderacao: "consta"
        },
        {
          empresa: "Porquinhos li",
          operacao: "Nao consta",
          moderacao: "consta"
        }
      ],
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
          align: 'end'
        }
      ]
    };
  }
};
</script>

<style></style>
