<template>
<v-layout column>
	<v-flex xs6 offset-xs3>
		<panel :title="song.title + ' - ' + song.album + ' - ' + song.artist">
		<v-layout row>
			<v-flex xs 6 offset-xs1 class="lyrics">
				<p>{{song.lyrics}}</p>
			</v-flex>
			<v-spacer />
			<v-flex offset-xs1>
				<img height=300px class="mt-6 Image" :src="song.albumImageUrl" />
				<br />
				<v-dialog fullscreen v-model="dialog" width="auto">
				<v-btn class="cyan" dark slot="activator">View Tabs</v-btn>
				<v-card>
					<v-btn @click.native="dialog = false" dark fixed  >Close</v-btn>
				<v-card-text class="mt-1 text-xs-left tab">{{song.tab}}</v-card-text>
				</v-card>
				</v-dialog>
				<v-btn
					dark
					class="cyan"
					:to="{
						name: 'song-edit', 
						params () {
						return {
							songId: song.id
						}
						}
					}">
					Edit
				</v-btn>
			</v-flex>
	 	</v-layout>
		</panel>
	</v-flex>
</v-layout>
</template>

<script>
import {mapState} from 'vuex'
import SongsService from '@/services/SongsService'
export default {
	data () {
		return {
			song: {},
			dialog: false
		}
	},
	computed: {
		//vuex, will pull the state obj, and find the route and give us "this.route"
		...mapState([
			'route'
		])
	},
	async mounted () {
		const songId= this.route.params.songId
		this.song = (await SongsService.show(songId)).data
		console.log(this.song)
		
	}

}
</script>

<style>
	.tab {
		white-space: pre-wrap;
		font-family: Courier New, Courier, monospace
	}
	.lyrics {
		white-space: pre-wrap;
	}
	.Image {
		margin-top: 40%;
	}
</style>
