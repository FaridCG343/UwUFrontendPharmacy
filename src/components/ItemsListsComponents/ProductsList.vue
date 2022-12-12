<template>

    <table class="scrollpane" v-if="modificable">
        <tr v-for="(row, index) in productNameList" :key="index">
            <cardItem class="cardItem" :barcode="productNameList[index]" :price="productPriceList[index]"
                :promotion="productPromotionList[index]" :quantity="productQuantityList[index]" modificable="true" />
        </tr>
    </table>

    <table class="scrollpane" v-else>
        <tr v-for="(row, index) in productNameList" :key="index">
            <cardItem class="cardItem" :barcode="productNameList[index]" :price="productPriceList[index]"
                :promotion="productPromotionList[index]" :quantity="productQuantityList[index]" modificable="false" />
        </tr>
    </table>

</template>

<script>
import cardItem from './productCardList.vue';

export default {

    name: 'ProductList',
    components: {
        cardItem,
    },
    props: {
        modificable: Boolean,
    },

    data() {
        return {
            productNameList: ["Prueba1"],
            productPriceList: [40],
            productPromotionList: ["Sin promocion"],
            productQuantityList: [10]
        }
    },
    methods: {
        async addProduct(productBarcode, price, promotion, quantity) {
            this.productNameList.push(productBarcode);
            this.productPriceList.push(price);
            this.productPromotionList.push(promotion);
            this.productQuantityList.push(quantity);
        }


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
