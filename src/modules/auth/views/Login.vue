<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
       
             <v-text-field 
             v-model="form.login"
             prepend-icon="mdi-account" 
             name="login" 
             label="Login" 
             type="text">
             </v-text-field>

             <v-text-field 
             v-model="form.password"
             id="password" 
             prepend-icon="mdi-lock" 
             :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
             :type="show ? 'text' : 'password'"
             name="password" 
             label="Password" 
             @click:append="show = !show"
             hint="At least 8 characters"
             >
             </v-text-field>
             
              <v-card-actions>
                <v-btn block color="primary">Login</v-btn>
              </v-card-actions>
            
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data () {
        return {
            show: false,
            form:{
                login: null,
                password: null
            }
        }
    },
    props: {
      source: String
    },
    created(){
        this.$notify({
            type:'success',
            text: 'Deu certo'
        })
    }
  }
</script>