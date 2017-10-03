<template>
<v-container>
    <h2>Create Song</h2>
    <v-layout row>
        <v-flex xs6 class="ml-2">
            <panel title="Create Song">
                <form name="CreateSong">
                    <v-text-field
                        label="Title"
                        v-model="title"
                        required
								:rules="[required]"
                        dark>
                    </v-text-field>

                    <v-text-field
                        label="Album"
                        v-model="album"
                        required
								:rules="[required]"
								
                        dark>
                    </v-text-field>

                    <v-text-field
                        label="Album Cover Link"
                        v-model="albumImageUrl"
                        dark>
                    </v-text-field>

                    <v-text-field
                        label="Artist"
                        v-model="artist"
                        required
								:rules="[required]"								
                        dark>
                    </v-text-field>
                    
                    <v-text-field
                        label="Genre"
                        v-model="genre"
								:rules="[required]"
                        required
                        dark>
                    </v-text-field>

                    <v-text-field
                        label="Youtube Key"
                        v-model="youtubeId"
                        dark>
                    </v-text-field>
                </form>
                <div v-html="error" class="danger-alert"></div>
                <div >
                <v-btn class="cyan" @click="post" dark>Add Song</v-btn>
                </div>
            </panel>
        </v-flex>
            <v-flex xs6 class="ml-2">
                <panel title="Tabs">
                    <v-text-field
                        label="Tabs"
                        v-model="tab"
								:rules="[required]"
                        rows="7"
                        multi-line
                        required
                        dark>
                    </v-text-field>
                </panel>
                <br>
                <panel title="Lyrics">
                    <v-text-field
                        label="Lyrics"
                        v-model="lyrics"
                        rows="6"
								:rules="[required]"
								required
                        multi-line
                        dark>
                    </v-text-field>
                </panel>
            </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import {mapState} from 'vuex'
import SongsService from '@/services/SongsService'
export default {
    data () {
        return{
            title: null,
            artist: null,
            youtubeId: null,
            albumImageUrl: null,
            album: null,
            lyrics:null,
            tab: null,
            genre: null,
            error: null
        }
	 },
	 computed: {
		...mapState([
			'user'
		])
	},
    methods: {
		 
        async post(){
            try{
					const userId = this.user.id
                const response = await 
                    SongsService.post({
                        title: this.title,
                        artist: this.artist,
                        album: this.album,
                        albumImageUrl: this.albumImageUrl,
                        genre: this.genre,
                        youtubeId: this.youtubeId,
                        lyrics:this.lyrics,
								tab: this.tab,
								madeBy: userId
					 })
					 console.log(response)
                this.$router.push({
                    name: "songs"
                })
            }catch(error){
                this.error = error.response.data.error
            }
        }
    }
}
</script>

<style>
    
</style>
