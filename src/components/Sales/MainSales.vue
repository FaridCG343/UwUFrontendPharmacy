<template>
    <div class="container" style="display: flex; height: 100%; ">
        <div class="left">
            <ProductsList class="ProductsList" />
            <AddItem />
            <TotalToPay />


        </div>
        <div class="right">
        </div>


    </div>
</template>

<script>
// import RightMainMenu from './RightMainMenu.vue'
import ProductsList from './ProductsList.vue';
import AddItem from './AddItem.vue';
import TotalToPay from './TotalToPay.vue';
import UserData from './UsersData.vue';

export default {

    name: 'StartMenu',
    components: {
        // RightMainMenu,
        ProductsList,
        AddItem,
        TotalToPay
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
