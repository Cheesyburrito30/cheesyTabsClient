<template>
  <panel title="search">
		<v-text-field 
			label="Search by Title, Artist, or Album" 
			v-model="search" dark>
		</v-text-field>
  </panel>
</template>

<script>
import _ from 'lodash'

export default {
	data () {
		return {
			search: ''
		}
	},
	//This updates the link as stuff is entered inside of search bar
	watch: {
		//this is a lodash thing, making it so that we don't send queries to the DB every single keystroke.
		search: _.debounce(async function (value){
			const route = {
				name: 'songs'
			}
			if(this.search !== '') {
				route.query = {
					search: this.search
				}
			}
			this.$router.push(route)
		}, 700),
		//this makes the search bar be what the route is
		'$route.query.search': {
			immediate: true, 
			handler(value) {
				this.search = value
			}
		}
	}
}
</script>

<style scoped >

</style>
