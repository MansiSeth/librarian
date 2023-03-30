<template>
<div>
    <h1>books.vue is rendering</h1>

    <!-- render json file as a list
    <v-list dense>
      <v-list-item v-for="(item, i) in books" :key="i">
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list> -->

    <!-- AppHeader rendering (add object and searchbar)-->

    <!-- it catches add and search events that are happening in the child. When add event happens in child (add button is clicked), router navigates to link with id=0 i.e it goes to bookEdit page with id=0 i.e. in add mode 
    If search is catched, then $event (things written in search box) are passed to the function -->
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

        <!-- Three-dots menu -->
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

                            <!-- Editing A book -->
                            <!-- Here, on clicking edit, we navigate to bookEdit page with given item id as param -->

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
            if (searchtext) {
                this.books = booksList.filter(rec => rec.title.toLowerCase().includes(searchtext.toLowerCase()))
            }

            // we append 'books' using the search logic to render only matching titles
            // We use filter method it's param is the records (rec) in json file that are converted to lower case. Then includes method is used whose param is searchtext in lowercase
        }

    }
};
</script>

<style lang="scss" scoped></style>
