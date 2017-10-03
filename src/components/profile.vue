<template>
	<v-layout column>
		<v-flex xs6 offset-xs3>
			<panel :title="$store.state.user.email">
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
import { mapState } from 'vuex'
import SongsService from '@/services/SongsService'
export default {
	data () {
		return {
			songs: []
		}
	},
	computed: {
		...mapState([
			'user'
		])
	},
	async mounted () {
		const userId = this.user.id
		console.log(this.user.id)
		this.songs = (await SongsService.userMade(userId)).data
		console.log(this.songs)
	}
}
</script>

<style>

</style>
