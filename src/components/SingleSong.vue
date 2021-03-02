<template>
  <div>
    <v-card-title>{{ song.title }}</v-card-title>
    <v-card-text>
      <h3 class="mb-2">{{ getPerformer(song.performerId) }}</h3>
      <vue-plyr>
        <audio>
          <source :src="getSongPathById(song.id)" type="audio/mp3" />
        </audio>
      </vue-plyr>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon :class="{ active: isActive }" @click="liked()">mdi-heart</v-icon>
      </v-btn>
    </v-card-actions>
  </div>
</template>
<script>

export default {
  props: ["song"],
  data() {
    return {
      performers: [],
      isActive: false,
      id: this.song.id,
    };
  },
  created() {
   this.performers = require('../songsdb/izvodjaci.json')
    for (var i = 0; i < this.$store.state.likedSongs.length; i++) {
      if (this.$store.state.likedSongs[i].id == this.song.id) {
        this.isActive = true;
      }
    }
  },
  methods: {
    getPerformer(id){
      return this.performers.filter(performer => performer.id == id)[0].name;
    },
    getSongPathById(id) {
      return require(`../songs/${id}.mp3`);
    },
    liked() {
      this.isActive = !this.isActive;
      var pesme = this.$store.state.likedSongs;
      for (var i = 0; i < pesme.length; i++) {
        if (pesme[i].id == this.song.id) {
          return pesme.splice(i, 1); 
        }
      }

      return pesme.push(this.song); 
    }
  }
};
</script>
<style scoped>
.link-style {
  color: rgba(0, 0, 0, 0.54);
  text-decoration: none;
}
.active.mdi-heart {
  color: #ff6b6a;
}
</style>