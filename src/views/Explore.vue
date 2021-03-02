<template>
    <div>
        <v-parallax style="height:400px; width: 100%; padding-top: 100px" src="../assets/parallax.jpg">
            <v-row  align="center" justify="center">
                <v-col cols="12">
                    <h1 class="text-center">Find your kind of music</h1>
                </v-col>
                <v-col cols="5">
                    <v-text-field
                    solo
                    label="Pretrazi..."
                    prepend-inner-icon="mdi-magnify"
                    v-model="search"
                    >
                    </v-text-field>
                </v-col>
               
            </v-row>
            <v-row justify="center" style="padding-top: 80px;">
                <v-btn-toggle class="btn-toggle" v-model="genre" mandatory>
                    <v-btn dark class="buttons" value='' @click="genreSongs">All</v-btn>
                    <v-btn dark class="buttons" value="Rap" @click="genreSongs">Rap</v-btn>
                    <v-btn dark class="buttons" value="Blues" @click="genreSongs">Blues</v-btn>
                    <v-btn dark class="buttons" value="Rock" @click="genreSongs">Rock</v-btn>
                </v-btn-toggle>
            </v-row>
        </v-parallax>
        
        <v-card v-for="(song) in filteredSongs" :key="song.title" class="transform-center mt-5" style="width:800px; backgrdound-color: #000000">
            <SingleSong  :song="song"/>
        </v-card>
    </div>
</template>
<style scoped>
    .transform-center {
        position: relative;
        left: 50%;
        background-color: blanchedalmond;
    }

</style>
<script>

import SingleSong from '../components/SingleSong.vue'
export default {
    components: {
        SingleSong
    },
    data(){
        return {
            search: '',
            songs: [],
            genre: ''
        }
    },
    computed: {
        searchedSongs: function(){
            return this.songs.filter((song)=> {
                return song.title.match(this.search);
            });
        },
        filteredSongs: function(){
            return (this.searchedSongs && this.genreSongs());
        }
    },
    created(){
         this.songs = require('../songsdb/pesme.json')
    },
    methods: {
        genreSongs: function(){
            if (this.genre == ''){
                return this.searchedSongs;
            }
            
            return this.songs.filter((song)=> song.genre == this.genre);
        },
    }
}
</script>