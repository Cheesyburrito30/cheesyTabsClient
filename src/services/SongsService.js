import api from '@/services/api'

export default {
    index(search) {
        return api().get('songs', {
			  params: {
				  search: search
			  }
		  })
    },
    post (song){
		return api().post('songs', song)
	},
	show(songId){
		return api().get(`songs/${songId}`)
	},
	userMade(userId){
		return api().get(`songs/user/${userId}`)
	},
	updateSong(song){
		return api().put(`songs/${song.id}`, song)
	}
}