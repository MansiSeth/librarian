<template>
<div>

    <h1>Author.vue is rendering</h1>

    <!-- App header with search and Add -->

    <app-header title="Authors" @search="searchInAuthors($event)" @add="$router.push('/authors/0')"></app-header>

    <!-- Rendering Author List -->

    <v-list-item two-line v-for="(item,i) in author" :key="i">

        <v-list-item-content>

            <v-list-item-title>{{item.name}}</v-list-item-title>

            <v-list-item-subtitle>{{item._id}}</v-list-item-subtitle>

        </v-list-item-content>

        <v-btn elevation="2" @click="$router.push('/authors/' + item._id)">Edit</v-btn>


    </v-list-item>

</div>
</template>

<script>
import AuthorData from '@/data/authors.json';
import AppHeader from './AppHeader.vue';

export default {
    components: { AppHeader },
    data() {
        return {
            author: AuthorData

        };
    },

    methods: {
        searchInAuthors(searchitem) {
            if (searchitem) {
                this.author = AuthorData.filter(rec => rec.name.toLowerCase()).includes(searchitem.toLowerCase())
            }

        }
    }

}
</script>

<style scoped>

</style>
