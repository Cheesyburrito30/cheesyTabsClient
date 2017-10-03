<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
        <songSearch />
        <panel class="mt-2" title="Songs">
            <div class="songsView" v-for="song in songs"
					:key="song.id">
					<v-layout row>
						<v-flex xs5 offset-xs1>
						<h4>{{song.title}}</h4>
						
						<h6>{{song.artist}}</h6>
						
						<h6>{{song.album}}</h6>
						<v-btn dark
							class="cyan"
							:to="{
								name: 'song',
								params: {
									songId: song.id
								}
							}">
							View
						</v-btn>
						</v-flex>
						<v-spacer />
						<v-flex xs 5>
							<img height=200px :src="song.albumImageUrl" />
						</v-flex>
					</v-layout>
				</div>
        </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import songSearch from '@/components/songSearch'
import SongsService from '@/services/SongsService'
export default {
    data () {
        return {
				songs: null,
        }
    },
    async mounted (){
        this.songs = (await SongsService.index()).data
	 },
	 components: {
		 songSearch
	 },
	 watch: {
		 '$route.query.search': {
			immediate: true,
			async handler (value) {
				this.songs = (await SongsService.index(value)).data
			}
		 }
	 }
}
</script>

<style scoped>
	.songsView {
		text-align: left;
	}
	img { 
		max-height: 100%
	}
</style>
