<template>
  <div>
    <v-parallax style="height:400px; width: 100%; padding-top: 100px" src="../assets/parallax.jpg"> </v-parallax>

      <v-card>
        <v-card-text>
          <v-card v-for="song in $store.state.likedSongs" :key="song.title" class="transform-center mt-5" style="width:800px;">
            <SingleSong :song="song"/>
          </v-card>
        </v-card-text>
      </v-card>

  </div>
</template>
<script>
import SingleSong from '../components/SingleSong'

export default {
    components: {
      SingleSong
    },
    data () {
      return {
        // userInfo: [],
      }
    },
    methods: {
    }
}
</script>
<style scoped>
.transform-center {
  position: relative;
  left: 50%;
  background-color: blanchedalmond;
}
</style>
