<template>

    <ProductsList :modificable="false" />
</template>

<script>

import ProductsList from '../ItemsListsComponents/ProductsList.vue';
import API from "@/axioshelper";

export default {

    name: 'MainProductsView',
    components: {
        ProductsList
    },
    props: {
    },
    data() {
        return {
            products: "",
        }
    },
    methods: {
        async getList() {
            this.products = API.get("product/list");
            console.log(this.products);

        }
    }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ProductsList {
    width: 100%;

}
</style>
