<template>
      <div class="secondary elevation-4">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>{{title}}</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2" >
            <slot>
              <!-- In the thing that imports this, can put anything inside of the slot -->
                no slot content defined
            </slot>
        </div>
      </div>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style scoped>
    
</style>
