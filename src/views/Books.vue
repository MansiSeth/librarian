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
    <app-header title="Books" tooltip="Add Book" @add="$router.push('/books/0')" @search="searchInBooks($event)"></app-header>

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
             <v-list-item-icon>
            <div>
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="white" plain v-bind="attrs" v-on="on">
                    <v-icon color="black">mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>
                <v-list>
                    <v-list-item>
                    <v-list-item-title @click="$router.push('/books/' + item._id)">Edit</v-list-item-title>
                  </v-list-item>
                    <v-list-item>
                    <v-list-item-title>Return</v-list-item-title>
                  </v-list-item>
                    <v-list-item>
                    <v-list-item-title>Delete</v-list-item-title>
                  </v-list-item>
                    <v-list-item>
                    <v-list-item-title>Issue</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
              <br />
              Status
            </div>
          </v-list-item-icon>
        </v-list-item-icon>
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

    methods: {
        searchInBooks(searchtext) {
            console.log(searchtext)
        }

    }
};
</script>

<style lang="scss" scoped></style>
