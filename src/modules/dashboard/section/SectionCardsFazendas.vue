<template>
  <v-container grid-list-xs>
    <v-row>
      <v-col>
        Fazendas
        <v-row>
          <v-col v-for="item in 4" :key="item" cols="12" md="4" sm="12" lg="3">
            <v-hover close-delay="218" open-delay="146">
              <v-card height="100">
                <v-card-title primary-title>
                  title
                </v-card-title>
                <v-card-subtitle>
                  Subtitle
                </v-card-subtitle>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-col>
      <v-col>
        Socio Ambiental
        <v-row>
          <v-col v-for="item in 4" :key="item" cols="12" md="4" sm="12" lg="3">
            <v-card height="100">
              <v-card-title primary-title>
                title
              </v-card-title>
              <v-card-subtitle>
                Subtitle
              </v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style></style>
