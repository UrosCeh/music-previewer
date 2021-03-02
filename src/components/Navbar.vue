<template>
  <div>
    <v-app-bar dark color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-sm-and-up"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn to="/" text>Explore</v-btn>
        <v-btn to="/user" text>Liked</v-btn>
        <v-btn to="/contact" text>Contact</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute>
      <v-list>
          <v-list-item active-class="primary--text" to="/">Explore</v-list-item>
          <v-list-item active-class="primary--text" to="/user">Liked</v-list-item>
          <v-list-item active-class="primary--text" to="/contact">Contact</v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div> 
</template>
<script>
export default {
  data(){
    return {
      drawer: false
    }
  }
}
</script>