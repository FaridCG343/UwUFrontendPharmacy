<template>

    <table class="scrollpane">
        <tr v-for="(row, index) in productList" :key="index">
            <cardItem class="cardItem" :barcode="row" />
        </tr>
    </table>

</template>

<script>
import cardItem from '../ItemsListsComponents/productCardList.vue';

export default {

    name: 'ProductList',
    components: {
        cardItem,
    },
    props: {
    },

    data() {
        return {
            productList: ["Prueba1", "prueba2", "prueba2", "prueba2", "prueba2",
                "prueba2", "prueba2", "prueba2", "prueba2", "prueba2",],
        }
    },
    methods: {
    }


}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body {
    width: 100%;
}

table {
    width: 100%;
}

.cardItem {
    width: 100%;
}

.scrollpane {
    overflow-y: scroll;
}
</style>
