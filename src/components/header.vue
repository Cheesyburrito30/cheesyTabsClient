<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-items>
      <v-btn flat dark>
        <v-toolbar-title class="mr-4"
        @click="navigateTo({name: 'Hello'})">
          CheesyTabs
        </v-toolbar-title>
      </v-btn>
    </v-toolbar-items>

    <v-toolbar-items>
      <v-btn flat dark to="/songs">Browse</v-btn>
    </v-toolbar-items>
    <v-spacer />
    <v-toolbar-items
    v-if="!$store.state.isUserLoggedIn">
        <v-btn flat dark to="/register">
          Sign Up
        </v-btn>
    </v-toolbar-items>
    <v-toolbar-items
      v-if="!$store.state.isUserLoggedIn">
      <v-btn flat dark to="/login">
        Sign In
      </v-btn>
    </v-toolbar-items>
	 <v-toolbar-items
      v-if="$store.state.isUserLoggedIn">
      <v-btn flat dark to="/songs/create">
        Add Tabs
      </v-btn>
    </v-toolbar-items>
    <v-toolbar-items
      v-if="$store.state.isUserLoggedIn">
      <v-btn flat dark to="/Profile">
        Profile
      </v-btn>
    </v-toolbar-items>
    <v-toolbar-items @click="logout">
      <v-btn v-if="$store.state.isUserLoggedIn" flat dark>
        Sign Out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout(){
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
		this.$store.dispatch('isUserLoggedIn', false)
		this.$router.push("/songs")
    }
  }
}
</script>

<style scoped>
</style>
