<template>
<div>

    <h1>AuthorEdit is rendering</h1>
    <!-- <p>current id = {{authors._id}}</p> -->

</div>
</template>

<script>
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
