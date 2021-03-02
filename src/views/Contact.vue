<template>
    <div>
        <v-parallax style="height:400px; width: 100%;" src="../assets/parallax.jpg">
            <h1 class="text-center">Contact us!</h1>
        </v-parallax>
        <v-row class="py-5" align="center" justify="center">
            <v-col sm="6" xs="12">
                <v-card class="pa-4">
                    <v-form ref="form">
                        <v-text-field prepend-icon="mdi-account" label="Name" v-model="formData.name"></v-text-field>
                        <v-text-field :rules="emailRules" prepend-icon="mdi-mail-ru" label="Email" v-model="formData.email"></v-text-field>
                        <v-text-field :rules="numberRules" prepend-icon="mdi-cellphone-text" label="Number" v-model="formData.number"></v-text-field>
                        <v-text-field :rules="selectRules" prepend-icon="mdi-earth" label="Country" v-model="formData.country"></v-text-field>
                        <v-textarea prepend-icon="mdi-fountain-pen-tip" filled label="Message" v-model="formData.msg"></v-textarea>
                        <v-btn @click="submit" color="primary" large class="transform-center">Submit</v-btn>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>
<style scoped>
.transform-center {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
</style>
<script>
export default {
    data(){
        return {
            formData: {
                name: '',
                email: '',
                number: null,
                country: '',
                msg: '',
            },
            emailRules: [
                v => /.+@.+\..+/.test(v) || 'Enter an existing email!'
            ],
            numberRules: [
                v => /^\d*$/.test(v) || 'You can only entar numbers!'
            ],
            selectRules: [
                v=>v.length >= 3 || 'This field is required!'
            ],
        }
    },
    methods: {
        submit(){
            if(this.$refs.form.validate()){
                console.log(this.formData)
            }
        }
    }
}
</script>