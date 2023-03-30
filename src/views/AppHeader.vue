<template>
  <div>
    <div class="app-header">

    <!-- searchbar -->

    <!-- notice the input event, it emits action "search" and data "$event that is whatever is typed in the search bar....this should be catched in parents (books, authors, staff etc.). This is parent child communication, child is app header imported in parent book/author/staff etc. " -->

      <v-row>
        <v-col>
          <v-text-field
            placeholder="Search"
            append-icon="mdi-magnify"
            @input="$emit('search', $event)"
          ></v-text-field>
        </v-col>
      </v-row>


    <!-- add button -->
    <!-- on click, the button emits  action 'add' that will be catched in the parent -->
      <v-row dense>
        <v-col cols="2" class="text-right">
          <v-btn @click="$emit('add')">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-col>
      </v-row>

      
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.app-header{
  display:flex;
  padding: 1rem;
}

</style>
