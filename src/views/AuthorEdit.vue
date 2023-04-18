<template>
<div>

    <h1>AuthorEdit is rendering</h1>
    <p>current id = {{id}}</p>




    <v-row >
        <v-col cols="10" offset="1" sm="8" offset-sm="2" md="6" offset-md="3">
        <v-form>
            <v-text-field label="Code" v-model="author._id" ></v-text-field>
            <v-text-field label="Name" v-model="author.name"></v-text-field>

        </v-form>
        </v-col>

        <div class="text-right">
            <v-btn>Save</v-btn>
            <v-btn>Cancel</v-btn>
        </div>
    </v-row>

</div>
</template>

<script>

import authorList from '@/data/authors.json'
export default {
    data() {
        return {
            id: 0,
            author: this.defaultObject() //if searchid=0, also author val
        }
    },

    mounted() {
        this.init()

    },

    methods: {

        init() {
            this.id = this.$route.params.id //getting id from path
            if (this.id != 0) {
                this.author = authorList.find(rec => rec._id == this.id)
                console.log(this.author);
            }
        },

        defaultObject() {
            return {
                code: "",
                name: ""
            }
        }

    }

}
</script>

<style lang="scss" scoped>

</style>
