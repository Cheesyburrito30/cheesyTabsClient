import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import register from '@/components/register'
import Login from '@/components/login'
import Songs from '@/components/songs'
import CreateSong from '@/components/CreateSong'
import ViewSong from '@/components/ViewSong'
import profile from '@/components/profile'
import EditSong from '@/components/EditSong'
Vue.use(Router)

export default new Router({
  routes: [
    {
    	path:'/register',
    	name: 'register',
    	component: register
    },
    {
      path:'/login',
      name: 'Login',
      component: Login
    },
    {
      path:'/songs',
      name: 'songs',
      component: Songs
    },
    {
      path:'/songs/create',
      name: 'CreateSongs',
      component: CreateSong
	 },
	 {
		 path:'/songs/:songId',
		 name: 'song',
		 component: ViewSong
	 },
	 {
		 path:'/songs/:songId/edit',
		 name: 'song-edit',
		 component: EditSong
	 },
	 {
		 path: '/profile',
		 name: 'profile',
		 component: profile
	 },
	 {
		 path: '*',
		 redirect: 'songs'
	 }
  ]
})
