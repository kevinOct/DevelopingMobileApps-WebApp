<template>
    <div class="title">
        <h2 :style="{color:color}" >Lorem Ipsum</h2>
    </div>
</template>

<script>

    export default {
        name: 'Title',

        components: {
        },

        props: {
            color: String,
            showButton: Boolean,
        }
    }

</script>

<style scoped>
    h2 {
        font-size: 18px;
        font-weight: 700;
        padding-bottom: -5px;
        letter-spacing: 0.24em;
        /*border: 1px solid steelblue;*/
    }
</style>