<template>
  <div>
    <h1>books.vue is rendering</h1>

    <!-- we first render all the items in json file as a list
    <v-list dense>
      <v-list-item v-for="(item, i) in books" :key="i">
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list> -->

    <!-- AppHeader rendering -->
    <app-header
      title="Books"
      tooltip="Add Book"
      @add="$router.push('/books/0')"
      @search="searchInBooks($event)"
    ></app-header>

    <!-- rendering booklist -->

    <v-list-item v-for="(item, i) in books" :key="i">
      <v-list-item-avatar>
        <v-img :alt="`${item.img} avatar`" :src="item.img"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
        <v-list-item-title>Author:{{ item.author.name }}</v-list-item-title>
        <v-list-item-subtitle>Pages:{{ item.pages }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-icon>
        <v-icon> status </v-icon>
      </v-list-item-icon>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <v-list>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-list-item>
  </div>
</template>

<script>
import booksList from "@/data/books.json";
import AppHeader from '@/views/AppHeader.vue';

export default {
  components: { AppHeader },
  data() {
    return {
      books: booksList, //initializing a variable called books to bookList which is the imported books from the json file
    
    };
  },

  methods:{
      searchInBooks(searchtext){
        console.log(searchtext)
      }
      
    }
};
</script>

<style lang="scss" scoped></style>
