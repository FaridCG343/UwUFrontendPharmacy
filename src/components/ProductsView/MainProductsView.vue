<template>

    <ProductsList :modificable="false" ref="ProductList" />
</template>

<script>

import ProductsList from '../ItemsListsComponents/ProductsList.vue';
import API from "@/axioshelper";
import { token } from '@/token';

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
    mounted: function () {
        this.$nextTick(function () {
            this.getList();
        })
    },

    methods: {
        async getList() {
            this.products = await API.get("product/list", null, token);
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
