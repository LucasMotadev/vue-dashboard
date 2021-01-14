<template>
  <v-container grid-list-xs>
    <v-row>
      <v-col cols="12" md="6" lg="6">
        <v-card>
          <ChartFazendaScor />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ChartFazendaScor from "../components/ChartFazendaScor";
export default {
  components: {
    ChartFazendaScor
  }
};
</script>

<style></style>
