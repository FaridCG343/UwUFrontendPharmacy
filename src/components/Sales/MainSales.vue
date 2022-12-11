<template>
    <div class="container" style="display: flex; height: 100%; ">
        <div class="left">
            <ProductsList class="ProductsList" />
            <TotalToPayVue />


        </div>
        <div class="right">
            <h1>algoder</h1>

        </div>


    </div>
</template>

<script>
// import RightMainMenu from './RightMainMenu.vue'
import ProductsList from './ProductsList.vue';
import TotalToPayVue from './TotalToPay.vue';

export default {

    name: 'StartMenu',
    components: {
        // RightMainMenu,
        ProductsList,
        TotalToPayVue
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
html {
    height: 100%;
}

body {
    padding-left: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
    padding-right: 0px;
}

.left {
    width: 65%;
    height: 100%;
    background: #D0F4DE;
}

.right {
    flex-grow: 1;
    background: #FFDEEE;

}

.ProductsList {
    padding: 10px;
}
</style>
