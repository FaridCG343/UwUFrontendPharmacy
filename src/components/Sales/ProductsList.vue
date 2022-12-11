<template>

    <table>
        <tr v-for="(row, index) in productList" :key="index">
            <cardItem class="cardItem" :barcode="row" />
        </tr>
    </table>

</template>

<script>
import cardItem from '../ItemsListsComponents/productCardList.vue';

export default {

    name: 'StartMenu',
    components: {
        cardItem,
    },
    props: {
    },

    data() {
        return {
            algo: "otro",
            productList: ["Prueba1", "prueba2", "prueba2", "prueba2", "prueba2",
                "prueba2", "prueba2", "prueba2", "prueba2", "prueba2",],
        }
    },
    methods: {
        getrow() {
            let rows = this.productList.length / 5;
            return (rows > 0 ? rows : 1);
        }
    }


}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cardItem {
    width: 100%;
}
</style>
