<template>

    <ProductsList :modificable="false" />
</template>

<script>

import ProductsList from '../ItemsListsComponents/ProductsList.vue';
export default {

    name: 'MainProductsView',
    components: {
        ProductsList

    },
    props: {
    },
    data() {
        return {
            // data
        }
    },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ProductsList {
    width: 100%;

}
</style>
