<template>
<div>
    <h1>BookEdit is rendering</h1>


    <v-row >
        <v-col cols="10" offset="1" sm="8" offset-sm="2" md="6" offset-md="3">
        <v-form>
            <v-text-field label="Code" v-model="book._id" ></v-text-field>
            <v-text-field label="Title" v-model="book.title"></v-text-field>
            <v-text-field label="Description" v-model="book.description"></v-text-field>

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
import bookList from '@/data/books.json'
export default {

    data() {
        return {
            id: 0,
            book: this.defaultObject()
            // this is default in "add" mode
        }
    },
    mounted() {
            console.log("In mounted");
            this.init()
            //this is a lifecycle method that calls init method everytime the page is rendered
        },
    methods: {
        init() {
            this.id = this.$route.params.id //getting id from path
            if (this.id != 0) {
                this.book= bookList.find(rec => rec._id==this.id)
                console.log(this.book);
                //if id is not 0, then it's edit mode so it needs to find id in json file by comparing record's id (rec._id) and id that's pulled from path (id)
            }
        },

        

        defaultObject() {
            return {
                code: "",
                title: "",
                description: "",

                // we need this initialized for when we add object, we need an empty object
            }
        }

    }

}

</script>

<style lang="scss" scoped>

</style>
