<template>
<v-container>
    <h2>Create Song</h2>
    <v-layout row>
        <v-flex xs6 class="ml-2">
            <panel title="Create Song">
                <form name="CreateSong">
                    <v-text-field
                        label="Title"
                        v-model="song.title"
                        required
								:rules="[required]"
                        dark>
                    </v-text-field>

                    <v-text-field
                        label="Album"
                        v-model="song.album"
                        required
								:rules="[required]"
								
                        dark>
                    </v-text-field>

                    <v-text-field
                        label="Album Cover Link"
                        v-model="song.albumImageUrl"
                        dark>
                    </v-text-field>

                    <v-text-field
                        label="Artist"
                        v-model="song.artist"
                        required
								:rules="[required]"								
                        dark>
                    </v-text-field>
                    
                    <v-text-field
                        label="Genre"
                        v-model="song.genre"
								:rules="[required]"
                        required
                        dark>
                    </v-text-field>

                    <v-text-field
                        label="Youtube Key"
                        v-model="song.youtubeId"
                        dark>
                    </v-text-field>
                </form>
                <div v-html="error" class="danger-alert"></div>
                <div >
                <v-btn class="cyan" @click="updateSong" dark>Add Song</v-btn>
                </div>
            </panel>
        </v-flex>
            <v-flex xs6 class="ml-2">
                <panel title="Tabs">
                    <v-text-field
                        label="Tabs"
                        v-model="song.tab"
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
                        v-model="song.lyrics"
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
import SongsService from '@/services/SongsService'
export default {
    data () {
        return{
				song:{
					title: null,
					artist: null,
					youtubeId: null,
					albumImageUrl: null,
					album: null,
					lyrics:null,
					tab: null,
					genre: null
				},
					error: null,
					require: (value) => !!value || 'Required'
			  }
	 },
    methods: {
      async updateSong(){
      		this.error = null
				const areAllFieldsFilledIn = Object
				.keys(this.song)
				if (!areAllFieldsFilledIn) {
				this.error = 'Please fill in all the required fields.'
				return
				}

				const songId = this.$store.state.route.params.songId
				try {
				await SongsService.updateSong(this.song)
				this.$router.push({
					name: 'song',
					params: {
						songId: songId
					}
				})
				} catch (err) {
				console.log(err)
				}
			}
		},
		async mounted () {
			try {
				const songId = this.$store.state.route.params.songId
				this.song = (await SongsService.show(songId)).data
			} catch (err) {
				console.log(err)
			}
		}
		}
</script>

<style>
    
</style>
