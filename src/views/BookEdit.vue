<template>
<div>
    <h1>BookEdit is rendering</h1>

    <v-row cols="10" offset="1" sm="8" offset-sm="2" md="6" offset-md="3">

        <v-form>

            <v-text-field label="Code"></v-text-field>
            <v-text-field label="Title"></v-text-field>
            <v-text-field label="Description"></v-text-field>

        </v-form>

        <div class="text-right">
            <v-btn>Save</v-btn>
            <v-btn>Cancel</v-btn>
        </div>
    </v-row>

</div>
</template>

<script>
import bookList from '@/data/books.json'
export default {

    data() {
        return {
            id: 0,
            book: this.defaultObject()
            // this is default in "add" mode
        }
    },

    methods: {
        init() {
            this.id = this.$route.params.id
            if (this.id != 0) {
                // this.book= bookList.
            }
        },

        mounted() {
            this.init()
        },

        defaultObject() {
            return {
                code: "",
                title: "",
                description: "",

                // we need this initialized for when we add object, we need an empty one
            }
        }

    }

}

</script>

<style lang="scss" scoped>

</style>
