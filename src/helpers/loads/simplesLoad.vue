<template>
    <v-overlay v-model="show">

    <v-progress-circular
      :size="150"
      :width="5"
      color="primary"
      indeterminate
      dark
    >
        {{ text }}
    </v-progress-circular>

    </v-overlay>

</template>

<script>
import { events } from '../events'
export default {
    data () {
        return {
            show: false,
            text: 'Carregando...'
        }
    },
    methods:{
        load (show = false) {
            this.show = show
        },

        
    },

    mounted () {
        events.$on('addSimplesLoad', this.load)
    }
}
</script>

<style>

</style>